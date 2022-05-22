const {createContainer, asClass, asFunction , asValue} = require('awilix')

const Config = require('../config')

const app = require('./index')

const {User , Comment , Idea} = require('../models')

const {UserRepository, CommentRepository, IdeaRepository} = require('../repositories')

const {UserService ,AuthService, CommentService, IdeaService} = require('../services')

const {UserController, AuthController, IdeaController, CommentController} = require('../controllers')


const {UserRoutes , AuthRoutes, IdeaRoutes, CommentRoutes} = require('../routes/index.routes')


const Routes = require('../routes')


const container = createContainer()

container
        .register({
            app : asClass(app).singleton(),
            router : asFunction(Routes).singleton(),
            config : asValue(Config)
        })
        .register({
            User : asValue(User),
            Comment : asValue(Comment),
            Idea : asValue(Idea)
        })
        .register({
            UserRepository : asClass(UserRepository).singleton(),
            CommentRepository : asClass(CommentRepository).singleton(),
            IdeaRepository : asClass(IdeaRepository).singleton()
        })
        .register({
            UserService : asClass(UserService).singleton(),
            AuthService : asClass(AuthService).singleton(),
            CommentService : asClass(CommentService).singleton(),
            IdeaService : asClass(IdeaService).singleton()
        })
        .register({
            UserController : asClass(UserController.bind(UserController)).singleton(),
            AuthController : asClass(AuthController.bind(AuthController)).singleton(),
            IdeaController : asClass(IdeaController.bind(IdeaController)).singleton(),
            CommentController : asClass(CommentController.bind(CommentController)).singleton()
           
        })
        .register({
            UserRoutes : asFunction(UserRoutes).singleton(),
            AuthRoutes : asFunction(AuthRoutes).singleton(),
            IdeaRoutes :asFunction(IdeaRoutes).singleton(),
            CommentRoutes : asFunction(CommentRoutes).singleton()
        })


module.exports = container