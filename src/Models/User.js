const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    _id:{type:Number,required:true},
    fname:{type:String,required :true},
    middleName:String,
    lname:String,
    email:String,
    password:String,
    phoneNumber:Number,
    createdAt:String,
   
})
module.exports=mongoose.model("user",userSchema);