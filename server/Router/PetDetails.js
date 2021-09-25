const express=require('express');
const router=express.Router();
const InfoRouter=require('../models/Pet');
router.post("/",async(req,res)=>{
    console.log(req.body)
var data=new InfoRouter({
    Name:req.body.Name,
    Animal:req.body.Animal,
    Breed:req.body.Breed,
    Age:req.body. Age,
    Gender:req.body.Gender,
    Description:req.body.Description,
    Image:req.body.Image
});
await data.save();
res.json(data);
})
//getAll()

router.get('/',async(req,res)=>{
    var findData=await InfoRouter.find();
    res.json(findData);
})

//Update

router.put('/update',async(req,res)=>{
var update=await InfoRouter.update({_id:req.body._id},{$set:{
    Name:req.body.Name,
    Animal:req.body.Animal,
    Breed:req.body.Breed,
    Age:req.body. Age,
    Gender:req.body.Gender,
    Description:req.body.Description,
    Image:req.body.Image
}})
res.json(update);
})


//delete
router.delete("/del/:id",async(req,res)=>{
    var delData=await InfoRouter.findByIdAndRemove(req.params.id).then(e=>{
res.json({message:"Deleted Successfully"})
    })
})
router.get('/',(req,res)=>{
    res.json("I am from router")
})

module.exports=router