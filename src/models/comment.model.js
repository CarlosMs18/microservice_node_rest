const {Schema, model} = require('mongoose')

const CommentSchema = Schema({
    comment :{type : String, required : true},
    description :{type : String, required : true},
    autor :{
        type : Schema.Types.ObjectId,
        ref : 'user',
        required : true,
        autopopulate : true
    }
})
CommentSchema.plugin(require('mongoose-autopopulate'))
module.exports = model('comment',CommentSchema)