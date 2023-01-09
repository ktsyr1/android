import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let schema = new Schema({
    _id: Number,
    name: String,
    username: { type: String, required: true },
    email: { type: String, required: true },
    image: String,
    roles: { type: String, required: false, default: 'member', enum: ["member", "editor", "support", 'Analyst', "administrator"] },
    password: String,
    Date: { type: Number, default: new Date() },
});

mongoose.models = {};
export default mongoose.model('user', schema);