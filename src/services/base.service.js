class BaseService{
    constructor(repository){
        this.repository = repository
    }

    async get(id){
        if(!id){
            const error = new Error()
            error.status = 400
            error.message = 'id must be sent'
            throw error
        }

        const currentEntity = await this.repository.get(id)
        if(!currentEntity){
            const error = new Error()
            error.status = 404
            error.message = 'Entity does not exist'
            throw error
        }

        return currentEntity
    }

    async getAll(pageSize , pageNum){
        return await this.repository.getAll(pageSize, pageNum)
    
    }

    async create(user){
       
        return await this.repository.create(user)
    }
    async update(id, body){
        if(!id){
            const error = new Error()
            error.status = 400
            error.message = 'id must be sent'
            throw error
        }

        const currentEntity = await this.repository.get(id)
        if(!currentEntity){
            const error = new Error()
            error.status = 404
            error.message = 'Entity does not exist'
            throw error
        }

        return await this.repository.update(id, body)
    }


    async delete(id){
        if(!id){
            const error = new Error()
            error.status = 400
            error.message = 'id must be sent'
            throw error
        }
        const currentEntity = await this.repository.get(id)
        if(!currentEntity){
            const error = new Error()
            error.status = 404
            error.message = 'Entity does not exist'
            throw error
        }

        return this.repository.delete(id)
    }
}

module.exports = BaseService