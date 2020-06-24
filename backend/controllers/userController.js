/*
***************************************************
Contains all information about Users, Edit Profile
***************************************************
*/ 
const bcrypt = require('bcrypt');
const Config = require('../config.js');
const { Mongoose, User } = require('../models')
const { 
	Insert, IsExists, Find, FindAndUpdate, Delete,
	HandleSuccess, HandleError, HandleServerError, SendEmail
} = require('./baseController')

const ChangePassword = async (req, res, next) => {
    try{
        let _id = req.body.id || ''
        let password = req.body.password || ''
        let confirmPassword = req.body.confirmPassword || ''
        let validateError = ''

        if(password!==confirmPassword)
            validateError = 'Password doesn\'t matched.'
        else if(_id === '' ||  password === '' || confirmPassword === '')
            validateError = 'All fields are required.'
        
        if(validateError)
            return HandleError(res,validateError)

        let salt = await bcrypt.genSalt(12);
        password = await bcrypt.hash(password, salt);

        let data = {password: password}

        let inserted = await FindAndUpdate(User,{_id: _id},data)
        if(inserted){
            inserted = Object.assign({}, inserted._doc);        //Cannot delete from immutable so creating new obj
            delete inserted.__v
            delete inserted.password
            return HandleSuccess(res,inserted)
        }
        else
            return HandleError(res,'Failed to change password.')
    }catch (err) {
        errLog = {module: 'ChangePassword', params: req.params, query: req.query, post: req.body, error: err}
        HandleServerError(res, errLog, 'Failed to post tribute.')
        next(err);
    }
}

/*
 * Exporting controller methods
 *
 */
exports.ChangePassword = ChangePassword