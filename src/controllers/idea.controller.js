
let _ideaService = null
class IdeaController{
    constructor({IdeaService}){
        _ideaService = IdeaService
    }

    async get(req, res){
        const {ideaId} = req.params
        const idea = await _ideaService.get(ideaId)
        return res.send(idea)
    }

    async getAll(req, res){
        const ideas = await _ideaService.getAll()
        return res.send(ideas)
    }

    async create(req, res){
 
        const {body} = req
        const createdComment = await _ideaService.create(body)
        return res.status(201).send(createdComment)
    }

    async update(req, res){
        const {body} = req
        const {ideaId} = req.params
        const ideaUpdated = await _ideaService.update(ideaId, body)
        return res.send(ideaUpdated)
    }


    async delete(req, res){
        const {ideaId} = req.params
        const ideaDelete = await _ideaService.delete(ideaId)
        return res.send(ideaDelete)
    }

    async getIdeasAuthor(req, res){
        const {userId} = req.params
        const userIdeas = await _ideaService.getIdeasAuthor(userId)
        return res.send(userIdeas)
    }

    async upvotesIdea(req, res){
        
        const {ideaId} = req.params
        const idea = await _ideaService.upvotesIdea(ideaId)
        return res.send(idea)

    }


    async downvotesIdea(req, res){
        const {ideaId} = req.params
        const idea = await _ideaService.downvotesIdea(ideaId)
        return res.send(idea)
    }

}


module.exports = IdeaController