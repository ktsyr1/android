import express from "express"
const app = express();
//  folder res routes  
import multer from "multer"
import path from 'path';
const __dirname = path.resolve();

let dir = "./processing/"
const upload = multer({ dest: dir })
import { AddApp, UpLoadFiles } from "./apk.js"

import Auth, { LogIn } from "./auth.js"
import { GetFile, GetFiles, DeleteAll, DeleteOne } from "./files.js"
import AppsServies, { AppServies } from './apps.js'
import Images from "./image.js";
import GooglePlay from "./googleplay.js";
import SearchEngine from "./app.js";
//  end imported
// tests  app

// start routes 
// apps
app.route('/apk')
    .post(Auth, upload.fields([{ name: "file", maxCount: 15 }]), UpLoadFiles)
    .patch(Auth, AddApp)

app.route('/apps')
    .get(AppsServies.get)
    .post(Auth, AddApp)

app.route('/apps/:url')
    .get(AppServies.get)
    .put(Auth, AppServies.put)
    .delete(Auth, AppServies.delete)

app.route("/cat/:q")
    .get(AppsServies.cat)
// files
app.route("/files")
    .get(Auth, GetFiles)
    .delete(Auth, DeleteAll)
app.route("/files/:file")
    .get(Auth, GetFile)
    .delete(Auth, DeleteOne)
// googleplay
app.route('/googleplay/:q')
    .get(Auth, GooglePlay.pageApp)
    .patch(Auth, GooglePlay.search)

// googleplay
app.route('/search')
    .get(SearchEngine)

// image
app.use('/image', Images)

app.route('/auth')
    .put(LogIn) // add user authentication

export default app;