const express=require("express");
const router=express.Router();
const controller=require("../Controllers/OrderController")
const express_validator=require("express-validator");
const {body, param, query}=require("express-validator");
const authMW=require("../MiddleWares/authMiddleWares");



router.use(authMW);
router.route("")

router.route("/Order")
.post(controller.createOrder)
router.route("/Order/:id")
.get(controller.getUserOrderById)
.put(controller.acceptOrRejectOrder)

module.exports=router;