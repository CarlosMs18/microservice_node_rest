class BaseRepository{
    constructor(model){
        this.model = model
    }

    async get(id){
        return await this.model.findById(id)
    }

    async getAll(){
        return await this.model.find()
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