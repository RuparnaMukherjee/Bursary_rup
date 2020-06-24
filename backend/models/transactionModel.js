const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    amount: { type: Number, get: v => Math.round(v), set: v => Math.round(v), dafault: 0, required: true },
    createdAt: {type: Date, default: Date.now},
    bursaryId: { type: Schema.Types.ObjectId, ref: 'bursaries' },
    recipientId: { type: Schema.Types.ObjectId, ref: 'users' },
    donorId: { type: Schema.Types.ObjectId, ref: 'users' },
})

const transactionModel = mongoose.model('transactions', transactionSchema)
module.exports = transactionModel