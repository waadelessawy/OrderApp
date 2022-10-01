const mongoose = require("mongoose");

let userOrdersSchema = new mongoose.Schema({
    _id:{type:Number, required:true},
    orderId:Number,
    userId:Number,
    createdAt:String
})
module.exports=mongoose.model("userOrders",userOrdersSchema);