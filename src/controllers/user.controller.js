let _userService = null
class UserController{
    constructor({UserService}){
        _userService = UserService
    }

    async get(req,res){
        const {userId} = req.params
        const user = await _userService.get(userId)
        return res.send(user)
    }

    async getAll(req, res){
        const users = await _userService.getAll()
        return res.send(users)
    }

    async update(req, res){
        
        const {userId} =req.params
        const {body} = req
        const  userUpdated = await _userService.update(userId, body)
        return res.send(userUpdated)
    }
    
    async delete(req, res){
        const {userId} = req.params
        const deleteUser = await _userService.delete(userId)
        return res.send(deleteUser)
    }

}


module.exports = UserController