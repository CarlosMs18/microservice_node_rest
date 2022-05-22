class BaseRepository{
    constructor(model){
        this.model = model
    }

    async get(id){
        return await this.model.findById(id)
    }

    async getAll(pageSize = 2, pageNum =1){
        const skips = pageSize * (pageNum -1)
        return await this.model.find()
                        .skip(skips)
                        .limit(pageSize)
    }

    async create(body){
        return await this.model.create(body)
    }

    async update(id, body){
        return await this.model.findByIdAndUpdate(id , body, {new : true})
    }

    async delete(id){
        await this.model.findByIdAndDelete(id)
        return true
    }
}

module.exports = BaseRepository