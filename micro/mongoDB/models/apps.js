import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let schema = new Schema({
    name: String,
    title: String,
    icon: String,
    url: String,
    package: String,
    images: [String],
    des: String,
    about: String,
    category: [String],

    keys: [{
        query: String,
        rank: Number,
    }],
    versions: [
        {

            size: String,
            hash: String,
            path: String,
            format: {
                type: String,
                enum: ['apk']
            },
            versionName: String,
            usesSdk: {
                minSdkVersion: Number,
                targetSdkVersion: Number,
                maxSdkVersion: Number
            },
            mode: String,
            updateFile: Date,

        }
    ],
    // info default
    info: {
        view: { type: Number, default: 0 },
        dl: { type: Number, default: 0 },
        display: { type: Boolean, default: false },
        update: { type: Date, default: new Date() },
    },

});

mongoose.models = {};
export default mongoose.model('apps', schema);