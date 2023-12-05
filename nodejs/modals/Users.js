const mongoose =require('mongoose');

const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number

})
//const Usermodal=mongoose.modelNames("users",UserSchema)
//module.exports =Usermodal;

module.exports=mongoose.model("users",UserSchema);