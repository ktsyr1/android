import { DBFiles } from "../mongoDB/index.js";
import fs from "fs";

export default async function DeleteVersions(req, res, next) {
    let { body, url } = req
    url = url.replace('/versions?', '')
    url = url.split('&')

    let query = { 'data.package': url[1].split('=')[1], 'data.versionName': url[0].split('=')[1] }
    let file = await DBFiles.findOne(query).select('path data.versionName')
    if (file) {
        await DBFiles.deleteOne(query)
        //  delete file
        await fs.rm(file?.path, async err => {
            if (err) res.status(404).json({ err })
            else res.status(200).json({ msg: 'ok', file, query })
        })
    } else res.status(400).json({ msg: null })
}