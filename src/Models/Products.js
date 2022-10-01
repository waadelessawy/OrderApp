const mongoose = require("mongoose");

let productsSchema = new mongoose.Schema({
    _id:Number,
    productName:String,
    price:Number,
    quantity:Number
})
module.exports=mongoose.model("products",productsSchema);