const BaseService = require('./base.service')
let _ideaRepository = null


class IdeaService extends BaseService {
        constructor({IdeaRepository}){
            super(IdeaRepository)
            _ideaRepository = IdeaRepository
        }
        
        async getIdeasAuthor(author){
            if(!author){
                const error = new Error()
                error.status = 400
                error.message = 'userId must be sent'
                throw error
            }

            return await _ideaRepository.getIdeasAuthor(author)
        }
        
        async upvotesIdea(ideaId){
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

            idea.upvotes.push(true)
            return await _ideaRepository.update(ideaId, {upvotes : idea.upvotes})
        }

        async downvotesIdea(ideaId){
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

            idea.downvotes.push(true)
            return await _ideaRepository.update(ideaId, {downvotes : idea.downvotes})
        }
}

module.exports = IdeaService