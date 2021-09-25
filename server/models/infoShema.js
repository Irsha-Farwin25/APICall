const mongoose=require("mongoose");

const infoSchema=mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true
    },
   Email:{
        type:String,
        required:true,
      
    }, 
    Password:{
        type:String,
        required:true,
    },
    ContactNumber:{
        type:String,
        required:true,
            },
    Location:{
        type:String,
        required:true
    },
    CreatedTime:{
        type:Date,
       default:Date.now
    }
})

module.exports=mongoose.model("Info",infoSchema)