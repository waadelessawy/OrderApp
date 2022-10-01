const {validationResult}=require("express-validator");
const User=require("../Models/User");


//Sign Up
module.exports.createNewUser=(request,response,next)=>{
    console.log("here")
  
    let result = validationResult(request);
    if(!result.isEmpty()){
        let message=result.array().reduce((current,error)=>current+error.msg," ");
        let error = new Error(message);
        error.status=422;
        throw error;

    }
    let user = new User({
        _id:request.body._id,
        fname:request.body.fname,
        middleNamw:request.body.middleNamw,
        lname:request.body.lname,
        email:request.body.email,
        password:request.body.password,
        phoneNumber:request.body.phoneNumber,
        createdAt:request.body.createdAt,
        
    })
    user.save()
    .then((data)=>{ 
        console.log("here")
        response.status(200).json({message:"user created",data})

    }).catch(error=>next(error));
}