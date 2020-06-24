const mongoose = require('mongoose');

exports.User = require('./userModel');
exports.Bursary = require('./bursaryModel');
exports.UserDetails = require('./userDetailsModel');
exports.Transaction = require('./transactionModel');

exports.Mongoose = mongoose;