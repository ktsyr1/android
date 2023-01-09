
let dir = "./public/images/"
import fs from "fs"

import express from "express"
const app = express();
//  folder res routes  
import multer from "multer"
import path from 'path';

const upload = multer({ dest: dir })

import Auth, { LogIn } from "./auth.js"

// routes
app.route('/')
    .post(Auth, upload.fields([{ name: "image", maxCount: 15 }]), addImage)
    .put(Auth, upload.array("images"), PutImages)

// micro application
export async function PutImages(req, res) {
    // rename files 
    let { body, files } = req
    let Package = JSON.parse(body.package)
    let { host } = process.env
    // promise all map rename files
    let promises = files.map((file, i) => {
        return new Promise((resolve, reject) => {
            let name = Package + '-' + new Date().getTime() + i + file.mimetype?.replace('image/', '.')
            fs.rename(file.path, dir + name, async (err) => {

                if (err) reject(err)
                else resolve('/images/' + name)
            })
        })
    }
    )
    // wait all promises
    let names = await Promise.all(promises)
    res.status(200).json(names);
}
export async function addImage(req, res) {
    // rename files 
    let { body, files } = req
    let { host } = process.env
    let image = files.image[0]
    fs.rename(image.path, dir + image.originalname, async (err) => {
    })
    res.status(200).json({ image: dir + image.originalname.replace("./public/") });
}


export default app;