import { DBApps, DBSearch } from "../mongoDB/index.js"
import GooglePlay from "./googleplay.js";

export default async function SearchEngine(req, res) {
    /**
     * req.query.q 
     * decodeURI
     * page  
     * findOne in SearchEngineModil
        * ture => data = findapps
        * else => {GooglePlay.search ,insert in SearchEngineModil }
        * res.json(data)
     */
    let query = decodeURI(req.query?.q)
    let find = await DBSearch.findOne({ query })
    let packages = find?.packages
    if (!find) {

        // scraping
        packages =await GooglePlay.initSearch(query)

        // cinsert in SearchEngineModil
        // DBSearch.create({ query, packages })
    }
    let data = await DBApps
        .find({ package: { $in: packages } })
        .select('icon package name url -_id category')
    res.status(200).json(data)
}