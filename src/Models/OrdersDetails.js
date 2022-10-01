const mongoose = require("mongoose");

let orderDetailsSchema = new mongoose.Schema({
    _id:Number,
    orderId:Number,
    quantity:Number,
    createdAt:String

})
module.exports=mongoose.model("orderDetails",orderDetailsSchema);