const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bursarySchema = new Schema({
    title : {type: String, required: true, trim: true},
    image: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    expiry: {type: Boolean, default: false},
    fundRequired: { type: Number, get: v => Math.round(v), set: v => Math.round(v), dafault: 0, required: true },
    collectedFund: { type: Number, get: v => Math.round(v), set: v => Math.round(v), dafault: 0, required: true },
    privacy: {type: Boolean, default: false, required: true},
    invitedDonors: {type: Array, default: []},
    admin:{
        status: {type: Boolean, default: false},
        notes: {type: String, trim: true},
        media: {type: Array, default: []}
    },
    user_id: { type: Schema.Types.ObjectId, ref: 'users' },
    createdAt: {type: Date, default: Date.now} 
})

const bursaryModel = mongoose.model('bursaries', bursarySchema)
module.exports = bursaryModel