import express from "express"
import path from 'path'
const app = express()
// const Route = express().Router();
import DB from "./mongoDB/index.js"
import cors from "cors"
import morgan from "morgan"
app.use(cors({credentials: true, origin: '*'}))

app.use(morgan('{:method} ":url" <<{:req[body]}>> [:status]==> :response-time ms'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import dotenv from 'dotenv'
dotenv.config()

DB()
// public folder files  ES6 modules expressjs
const __dirname = path.resolve();

// view folder in public for all users
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => res.send("scrapis api"))
//  folder res routes 
import api from "./res/route.js"
import { AppServies } from "./res/apps.js"
app.use("/api", api)

app.get('/download/:token', AppServies.download)

const port = process.env.PORT || 5050
app.listen(port, () => {
    console.log(`⚡️ app listening on port ${port}`)
})