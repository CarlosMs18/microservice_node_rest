const {JWT_SECRET} = require('../config')
const jwt = require("jsonwebtoken");


module.exports = (req, res , next) =>{
    const token = req.headers['authorization']
    if(!token){
        const error = new Error()
        error.status = 400
        error.message = 'Token has not providen'
        throw error
    }

    jwt.verify(token ,JWT_SECRET,function(err, decodedToken){
        if(err){
            const error = new Error()
            error.status = 401
            error.message = 'Token invalid'
            throw err
        }
        console.log(decodedToken)
        req.user = decodedToken
        next()
    })

 
    
}