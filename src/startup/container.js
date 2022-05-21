const {createContainer, asClass, asFunction , asValue} = require('awilix')

const Config = require('../config')

const app = require('./index')

const {User} = require('../models')

const {UserRepository} = require('../repositories')

const {UserService ,AuthService} = require('../services')

const {UserController, AuthController} = require('../controllers')


const {UserRoutes , AuthRoutes} = require('../routes/index.routes')


const Routes = require('../routes')


const container = createContainer()

container
        .register({
            app : asClass(app).singleton(),
            router : asFunction(Routes).singleton(),
            config : asValue(Config)
        })
        .register({
            User : asValue(User)
        })
        .register({
            UserRepository : asClass(UserRepository).singleton()
        })
        .register({
            UserService : asClass(UserService).singleton(),
            AuthService : asClass(AuthService).singleton()
        })
        .register({
            UserController : asClass(UserController.bind(UserController)).singleton(),
            AuthController : asClass(AuthController.bind(AuthController)).singleton()
        })
        .register({
            UserRoutes : asFunction(UserRoutes).singleton(),
            AuthRoutes : asFunction(AuthRoutes).singleton()
        })


module.exports = container