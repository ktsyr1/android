import fs from 'fs'
import { DBApps, DBFiles } from '../mongoDB/index.js'
import ApkReader from "./apk.js"
let dir = "./processing/"

export async function GetFiles(req, res) {
    let files = await fs.readdirSync(dir)
    let Data = []
    files.map(file => Data.push({ name: file }))
    res.status(200).json(Data);
}

export async function DeleteAll(req, res) {
    // delete all files in dir
    try {
        let files = await fs.readdirSync(dir)
        files.forEach(file => fs.unlinkSync(dir + file))
        res.status(200).json({ msg: "deleted" });
    } catch (error) { res.status(404).json(error); }
}
export async function GetFile(req, res) {
    try {
        let file = await ApkReader(decodeURI(req.params.file), dir)
        let app = await DBApps.findOne({ package: file.package })
        let version = await DBFiles.findOne({ 'data.versionName': file.versionName })

        file.icon = file.icon != undefined ? file?.icon.replace('public', '') : undefined
        if (!app) file.state = 'new'
        else if (!version) file.state = 'update'
        else file.state = 'delete'

        res.status(200).json(file);
    } catch (error) { res.status(404).json(error); }
}
export async function DeleteOne(req, res) {
    let { file } = req.params
    try {
        await fs.unlinkSync(`${dir}${file}`)
        res.status(200).json({ msg: 'dane', status: true })
    } catch (error) {
        res.status(200).json({ msg: 'error ', status: true })
    }
}
export default 'app';

