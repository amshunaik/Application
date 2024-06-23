const express =require("express");
require('./db/config')
const cors=require('cors')
const User=require("./db/User")
const mongoose=require('mongoose');
const Product=require("./db/Product");

const app=express();
app.use(cors());
app.use(express.json());
app.post("/register",async(req,res)=>{
    let user=new User(req.body);
    let result=await user.save();
    res.send(result)
})

app.post("/login",async (req,res)=>{
    if(req.body.pw&&req.body.email){
        let user=await User.findOne(req.body).select("-pw");
        if(user){
            res.send(user);
        }
        else{
            res.send("no user found");
        }
    //res.send(user);

    }
    else{
        res.send({result:"no result"})
    }
    
})
app.post("/add",async(req,res)=>{
    let prod=new Product(req.body);
    let result=await prod.save();
    res.send(result)


})
app.get("/product",async (req,res)=>{
    let products=await Product.find();
    if(products.length>0){
        res.send(products);
    }
    else{
        res.send({result:"no list found"});
    }
})
app.delete("/product/:id",async(req,res)=>{
    res.send(req.params.id)
    const result=await Product.deleteOne({_id:req.params.id});
    res.send(result);
})

app.listen(4000);