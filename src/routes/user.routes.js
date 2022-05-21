const {Router} = require('express')

module.exports = function({UserController}){

    const router = Router()

    router.get('/:userId',UserController.get)


    router.get('',UserController.getAll)


    router.put('/:userId',UserController.update)

   
    router.delete('/:userId',UserController.delete)
    return router
}