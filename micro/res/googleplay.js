import axios from "axios"
import { JSDOM } from "jsdom"
let URL = `https://play.google.com/store`

export async function ScrapEngine(defaultURL) {
    let config = { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36" } }

    let { data } = await axios.get(defaultURL, config)
    // js dom parser
    let { document } = new JSDOM(data).window
    return document
}
export default class GooglePlay {
    static async pageApp(req, res) {
        try {
            let URLApp = `https://play.google.com/store/apps/details?id=${req.params.q}`
            let document = await ScrapEngine(URLApp)

            let images = Array.from(document.querySelectorAll('img.B5GQxf')).map(a => a.src)
            let name = document.querySelector('h1[itemprop="name"]').textContent
            let icon = document.querySelector('img[itemprop="image"]').src
            let category = JSON.parse(document.querySelector('[type="application/ld+json"]').textContent).applicationCategory.toLocaleLowerCase()

            let app = { name, icon, images, category }
            res.status(200).json(app);

        } catch (error) {
            res.status(404).json({ message: "Not found" })
        }
    }

    static async search(req, res) {
        try {
            URL  = `https://play.google.com/store/search?q=${req.params.q}&c=apps&hl=ar`
            let { document } = ScrapEngine(URL)

            let apps = Array.from(document.querySelectorAll('.Si6A0c.Gy4nib')).map(a => a.href.split('?id=')[1])
            console.log(apps);
            res.status(200).json(apps);

        } catch (error) {
            res.status(404).json({ message: "Not found", error })
        }
    }
    static async initSearch(query) {
        // return ['dev.conn.assetlinkstool', 'com.copy.paste.ocr.screen.text.copypastetrial']

        try {
            URL  = `https://play.google.com/store/search?q=${encodeURI(query)}&c=apps&hl=ar`
            console.log(URL);
            let { document } = await ScrapEngine(URL)

            let apps = Array.from(document.querySelectorAll('.Si6A0c.Gy4nib')).map(a => a.href.split('?id=')[1])
            return apps

        } catch (error) {
            console.error(error)
            // return ['dev.conn.assetlinkstool', 'com.copy.paste.ocr.screen.text.copypastetrial']
        }
    }
}
