import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let schema = new Schema({

    size: String,
    hash: String,
    path: String,
    format: {
        type: String,
        enum: ['apk', 'png', 'jpg', 'webp']
    },
    // file: [{ type: mongoose.Schema.Types.ObjectId, ref: 'apps' }],
    //  info info file
    data: {
        name: String,
        package: String,
        versionName: String,
        usesSdk: {
            minSdkVersion: Number,
            targetSdkVersion: Number,
            maxSdkVersion: Number
        },
        mode: String,
        updateFile: Date,
    },

    // info default
    info: {
        view: { type: Number, default: 0 },
        dl: { type: Number, default: 0 },
        display: Boolean,
        Date: { type: Date, default: new Date() },
    },

});

mongoose.models = {};
export default mongoose.model('files', schema);