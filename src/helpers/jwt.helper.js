const {sign} = require('jsonwebtoken')
const {JWT_SECRET} = require('../config') 

module.exports = function(user){
    return sign({user}, JWT_SECRET, {expiresIn : '4h'})
}