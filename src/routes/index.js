const express = require('express')
const {ErrorNotFound, ErrorMiddleware}= require('../middlewares')
require('express-async-errors')

module.exports = function({UserRoutes , AuthRoutes, IdeaRoutes, CommentRoutes}){
    const router = express.Router()
    const apiRoutes = express.Router()


    apiRoutes
        .use(express.json())

    apiRoutes.use('/auth',AuthRoutes)
    apiRoutes.use('/user',UserRoutes)
    apiRoutes.use('/idea',IdeaRoutes)
    apiRoutes.use('/comment',CommentRoutes)
    router.use('/v1/api',apiRoutes)

    

    router.use(ErrorNotFound)

    router.use(ErrorMiddleware)
    return router
}