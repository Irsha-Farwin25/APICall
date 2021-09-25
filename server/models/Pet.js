const mongoose=require("mongoose");

const Pet=mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true
    },
   Animal:{
        type:String,
        required:true,
      
    }, 
    Breed:{
        type:String,
        required:true,
    },
 Age:{
        type:Number,
        required:true,
            },
 Gender:{
        type:String,
        required:true
    },
    Description:{
        type:String
    },
    CreatedTime:{
        type:Date,
       default:Date.now
    },
    Image:{
        type:String,

    }
})

module.exports=mongoose.model("Pet",Pet)