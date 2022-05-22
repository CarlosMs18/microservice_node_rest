const BaseService = require('./base.service')

let _commentRepository = null,
    _ideaRepository = null

class CommentService extends BaseService{
        constructor({CommentRepository, IdeaRepository}){
            super(CommentRepository)
            _commentRepository = CommentRepository
            _ideaRepository = IdeaRepository
        }

    async commentsIdea(ideaId){
        if(!ideaId){
            const error = new Error()
            error.status = 400
            error.message = 'ideaId must be sent'
            throw error
        }
        const idea = await _ideaRepository.get(ideaId)
        if(!idea){
            const error = new Error()
            error.status = 404
            error.message = 'idea doest not found'
            throw error
        }

        const {comments} = idea
        return comments
    }

    async createdComment(ideaId, body){
        if(!ideaId){
            const error = new Error()
            error.status = 400
            error.message = 'ideaId must be sent'
            throw error
        }
        const idea = await _ideaRepository.get(ideaId)
        if(!idea){
            const error = new Error()
            error.status = 404
            error.message = 'idea doest not found'
            throw error
        }

        const createdComment = _commentRepository.create(body)

        idea.comments.push(createdComment)

        return await _ideaRepository.update(ideaId, {comments : idea.comments})

    }

}

module.exports = CommentService