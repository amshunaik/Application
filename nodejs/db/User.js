const mongoose=require('mongoose');
const us=new mongoose.Schema({
    name:String,
    email:String,
    pw:String,
});

module.exports=mongoose.model("users",us);