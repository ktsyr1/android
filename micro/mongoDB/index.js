import user from './models/user.js'
import apps from './models/apps.js'
import files from './models/files.js'
import search from './models/search.js'
import mongoose from 'mongoose';

export default async function DB() {
    const { DB } = process.env && process.env

    mongoose.connect(DB)
        .then(console.log(`📦 DB`))
        .catch(err => console.log(err))
}
export const DBUser = user
export const DBApps = apps
export const DBFiles = files
export const DBSearch = search
