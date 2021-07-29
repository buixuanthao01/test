const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
        unique:true
    },
    description:{
        type:String,
        require:true
    },
    image:{
        type:String
    },
    author:{
        type:Number
    },
    category:{
        type:String
    }
},{timeStamps:true});
module.exports = mongoose.model("Product",bookSchema)