const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({



    name:{
        
        
        type:String,required:true
    
    },


    location:{
        
        type:String,required:true
    
    },


    description:{
        
        type:String,required:true
    
    
    },


    PostImage:{
        
        type:String,required:true
    
    },


    date:{
        type:Date,required:true
    
    },
    likes:Number
});

const post = mongoose.model("posts",postSchema);

module.exports = post;