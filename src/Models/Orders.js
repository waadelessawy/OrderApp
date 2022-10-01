const mongoose = require("mongoose");

let orderSchema = new mongoose.Schema({
    _id:Number,
    userId:Number,
    totalPrice:Number,
    status: Boolean,
    createdAt: String
})
module.exports=mongoose.model("order",orderSchema);