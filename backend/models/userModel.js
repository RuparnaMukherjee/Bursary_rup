const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, trim: true },
    type: { type: String, required: true },
    createdAt: {type: Date, default: Date.now}
});


const userModel = mongoose.model('users', userSchema);
module.exports = userModel;