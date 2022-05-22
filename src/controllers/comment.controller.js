let _commentService = null
class CommentController{
    constructor({CommentService}){
        _commentService = CommentService
    }

    async createdComment(req, res){
        const {ideaId} = req.params
        const {body} = req
        const commentCreated = await _commentService.createdComment(ideaId, body)
        return res.status(201).send(commentCreated)
    }
}


module.exports = CommentController