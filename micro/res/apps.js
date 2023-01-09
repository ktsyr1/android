import { DBApps, DBFiles } from "../mongoDB/index.js";
import fs from "fs"
import jwt from 'jsonwebtoken'
export default class AppsServies {
    static get = async (req, res) => {
        let { p, display, limit = 10 } = req.query
        p = p == undefined ? 0 : p
        p = p > 0 ? p - 1 : 0
        let query = {}//display === 'all' ? {} : { "info.display": true }
        /**
         * @type {Array}
         */
        let apps = await DBApps
            .find(query)
            .select('icon package name url -_id')
            .sort({ _id: -1 })
            .skip(p * 10)
            .limit(limit)
        let count = await DBApps.countDocuments(query)
        res.status(200).json({ apps, count })
    }

    static cat = async (req, res) => {
        let [q, page] = [req.params.q, req.query.p]
        let apps = await DBApps
            .find({ category: { $in: q } })
            .select(' icon package name url -_id category')
            .sort({ _id: -1 })
            .skip((page || 0) * 10)
            .limit(10)
        res.status(200).json(apps)
    }
}
export class AppServies {
    static get = async (req, res) => {

        let { params } = req
        let app = await DBApps.findOne({ url: params.url }).select('-_id -keys -__v ')
        if (app) {
            let versions = await DBFiles.find({ 'data.package': app?.package }).sort({ versionName: -1 }).select('-_id -__v   ')
            versions = versions.map(a => {
                // new token for path 
                var token = jwt.sign({ path: a.path, url: app.url, expiresIn: new Date().getTime() }, process.env.sercet)
                return { ...a._doc, path: token }
            })
            res.status(200).json({ ...app._doc, versions })
        } else {
            res.status(404).json({ msg: 'not apps', status: 404 })
        }
    }
    static put = async (req, res) => {
        let app = await DBApps.findOneAndUpdate({ url: req.params.url }, { $set: req.body })
        if (app) res.status(200).json({ msg: 'updated' })
        else res.status(404).json({ msg: 'not found' })

    }
    static delete = async (req, res) => {

        let { url } = req.params
        let app = await DBApps.findOne({ url: url })
        await DBApps.deleteOne({ package: app.package })
        let files = await DBFiles.find({ 'data.package': app.package })
        await DBFiles.deleteMany({ 'data.package': app.package })
        let filesPaths = files.map(a => a.path?.replace('./public', ''))
        let paths = [
            app.icon,
            ...filesPaths,
            ...app.images
        ]
        paths.map(async file => {
            await fs.unlinkSync(`./public${file}`)
        })
        res.status(200).json({ msg: 'dane' })
    }
    static download = async (req, res) => {
        let { headers, params } = req
        let { client, clientJSON, sercet } = process.env
        // console.log(JSON.parse(clientJSON))
        if (headers.referer === client) {
            let { token } = params

            let { expiresIn, path } = jwt.verify(token, sercet)
            let out = expiresIn + 1000 * 60 * 60 * 24

            if (out >= new Date().getTime()) {
                res.download(path)
            }
            else res.redirect(`${client}/android/${decoded.url}`)
        } else res.redirect(client)
    }
} 