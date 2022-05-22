const {Router} = require('express')
const {AuthMiddleware} = require('../middlewares')
module.exports = function({IdeaController}){

    const router = Router()
    
    router.get('/:ideaId',IdeaController.get)
    router.get('',IdeaController.getAll)
    router.post('',AuthMiddleware,IdeaController.create)
    router.put('/:ideaId', AuthMiddleware,IdeaController.update)
    router.delete('/:ideaId', AuthMiddleware, IdeaController.delete)

    router.get('/:userId/all',IdeaController.getIdeasAuthor)

    router.post('/:ideaId/upvote',IdeaController.upvotesIdea)


    router.post('/:ideaId/downvote',IdeaController.downvotesIdea)

    
    return router
}