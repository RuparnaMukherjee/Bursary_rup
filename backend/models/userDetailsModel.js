const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDetailsSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'users', required: true},
    user_details: {type: Object, required: true}
});

const userDetailsModel = mongoose.model('userDetails', userDetailsSchema)
module.exports = userDetailsModel