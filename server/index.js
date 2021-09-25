const express=require('express');
const mongoose  = require('mongoose');
const app=express();
const morgan=require('morgan');

app.use(express.json());

//router
app.use(morgan("dev"));
const infoRouter=require('./Router/router');
const Pet=require('./Router/PetDetails');

app.use("/info",infoRouter)
app.use("/pet",Pet);
////mon connection
mongoose.connect("mongodb://localhost/mypet1",(err)=>{
    if(!err){
        console.log("DB Connected");
    }
});
''
app.listen(5000,()=>{
    console.log("Server started on 5000");
})




