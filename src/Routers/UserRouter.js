const express=require("express");
const router=express.Router();
const controller=require("../Controllers/UserController")
const express_validator=require("express-validator");
const {body, param, query}=require("express-validator");
const authMW=require("../MiddleWares/authMiddleWares");



router.route("/users")
.post(controller.createNewUser)

module.exports=router;