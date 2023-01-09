import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let schema = new Schema({
    query: String,
    packages: [String],
    const: { default: 0, type: Number },
    date: { default: new Date(), type: Number }
});

mongoose.models = {};
export default mongoose.model('search', schema);