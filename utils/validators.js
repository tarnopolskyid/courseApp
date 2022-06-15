const {body} = require('express-validator')
const { is } = require('express/lib/request')
const User = require('../models/user')

exports.signupValidators = [
    body('email', 'Invalid email format')
        .isEmail()
        .custom(async (value, {req}) => {
            try{
                const user = await User.findOne({email: value})
                if (user) {
                    return Promise.reject('User with this email already exists')
                }
            } catch(e) {
                console.log(e);
            }
        })
        .normalizeEmail(),
    body('password', 'Password length must be at least 6 characters')
        .isLength({min: 6, max: 56})
        .isAlphanumeric()
        .trim(),
    body('confirm')
        .custom((value, {req}) => {
            if(value !== req.body.password){
                throw new Error('Confirmation does not match')
            }
            return true
        })
        .trim(),
    body('name', 'Name length must be at least 3 characters')
        .isLength({min:3})
        .trim()
]

exports.loginValidators = [
    body('email', 'Invalid email format')
    .isEmail()
    .normalizeEmail(),
    body('password', 'Password length must be at least 6 characters')  
        .isLength({min: 6, max: 56})
        .isAlphanumeric()
        .trim()
]

exports.courseValidators = [
    body('title', 'Course title length must be at least 3 characters')
        .isLength({min:3})
        .trim(),
    body('price', 'Enter correct price, please')
        .isNumeric(),
    body('img', 'Enter correct image URL, please')
        .isURL()
]