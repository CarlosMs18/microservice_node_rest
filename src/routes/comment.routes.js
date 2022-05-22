const {Router} = require('express')
const {AuthMiddleware} = require('../middlewares')
module.exports = function({CommentController}){

    const router = Router()
    
    router.post('/:ideaId', AuthMiddleware,CommentController.createdComment)

    
    return router
}