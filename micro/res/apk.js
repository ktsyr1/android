
import fs from "fs"
import path from "path"
import mime from 'mime-types'
import AppInfoParser from 'app-info-parser'
import strtok3 from 'strtok3'
import byteSize from 'byte-size'
import md5File from 'md5-file'
import base64Img from 'base64-img'

import { DBApps, DBFiles } from "../mongoDB/index.js"
let dir = "./processing/"

export async function AddApp(req, res) {
    let data = req.body
    let { path: Path } = data
    async function addapp(packages) {
        let app = await DBApps.findOne({ package: packages })
        data = { ...data, category: data?.category?.split(',') }
        let App = !app ? await DBApps.create(data) : ''
        return App
    }
    async function addFile(query) {
        let file = await DBFiles.findOne({ data: query })
        console.log(req.body);
        if (!file && data && Path) {
            let path = './public/files/apks/' + data.package + '-v' + data.versionName + '[pesktop.com].apk'
            await fs.renameSync(Path, path)
            let { size, hash, name, versionName, usesSdk, mode } = data
            let def_file = {
                size, hash, format: 'apk', path,
                data: { name, versionName, usesSdk, mode, package: data.package, },
            }
            if (data.url) {
                // save to db 
                await addapp(data?.package)
                await DBFiles.create(def_file)
                return true
            } else return false
        } else return false
    }

    try {
        // add file to app
        let ok = await addFile({ package: data?.package, versionName: data?.versionName })

        res.status(200).json({ ok });
    } catch (error) {
        res.status(404).json({ msg: '😁', });

    }
}


async function ApkReader(file, dir, info) {
    const lookup = mime.lookup(dir + file)
    const format = mime.extension(lookup)
    if (format === 'apk') {
        //s
        const Size = async (file) => {
            const tokenizer = await strtok3.fromFile(dir + file);
            try {
                const size = byteSize(tokenizer.fileInfo.size)
                const sizeString = size.value + ' ' + size.unit
                return sizeString
            } finally { tokenizer.close() }
        }
        const size = await Size(file)
        const hash = await md5File(dir + file)

        let audit = {}
        try {
            const parser = new AppInfoParser(dir + file)
            let result = await parser.parse()
            audit = result
        } catch (err) { return Object.assign(audit, { msg: 'The file is corrupt' }) }

        await Object.assign(audit, { hash: hash, size: size })
        // get icon base64 to png file 
        // save it to processing folder 
        //  import base64Img// save image to file
        let icon
        try {
            icon = await base64Img.imgSync(audit.icon, './public/icons', audit.package + '[icon]', '.png')
        } catch (error) { }
        let label = audit.application.label
        let name = typeof label === 'string' ? label : label[0]
        return {
            name: name,
            versionName: audit.versionName,
            package: audit.package,
            usesSdk: audit.usesSdk,
            hash,
            size,
            path: dir + file,
            // sizeInt: info.size,
            icon: icon,

        }

    }
}

export async function UpLoadFile(req, res) {
    let file = req.files.file[0];
    if (file.mimetype === "application/vnd.android.package-archive") {
        let fileName = file.originalname.split(".")[0] + '.' + new Date().getTime() + ".apk"
        fs.rename(file.path, path.join(dir, fileName), async (err) => { if (err) throw err; })
        // apk parser  
        // var apkInfo = await ApkReader(fileName, dir, file)
        res.status(200).json(file);
    } else if (!file) res.status(400).send("No file uploaded");

}

export async function UpLoadFiles(req, res) {
    let files = req.files.file
    files?.map(async (file) => {

        let fileName = file.originalname.split(".")[0].replaceAll(' ', '-') + '.' + new Date().getTime() + ".apk"
        fs.rename(file.path, path.join(dir, fileName), async (err) => { if (err) throw err; })
        return path.join(dir, fileName)
    })

    res.status(200).json({ msg: 'dane' });
}

export async function DaneProcess(req, res) {
    let { path } = req.body
    // find file in dir and delete it
    let files = fs.readdirSync(dir)
    let filter = files.filter(file => file.includes(path?.replace(dir, '')))

    if (filter.length > 0) {
        fs.renameSync(path, path?.replace(dir, './public/files/apks/'), (err) => { if (err) throw err; })

        // save to db

        res.status(200).json({ msg: 'Ok' })
    } else res.status(400).json({ msg: 'File not found' })
}

export default ApkReader
