const mongoose=require('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/crud")
const p=new mongoose.Schema({
    name:String,
    place:String,
    house:String,
});

module.exports=mongoose.model("places",p);
