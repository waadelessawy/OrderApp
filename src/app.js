const express = require("express");
const body_parser=require("body-parser");
const mongoose= require("mongoose");
const userRouter=require("./Routers/UserRouter");
const orderRouter=require("./Routers/OrderRouter");
const authRouter=require("./Routers/AuthRouter")
const server=express();


mongoose.connect("mongodb://localhost:27017/OrderAppDB")
        .then(()=>{
            console.log("DB connectd");
            server.listen(process.env.PORT||8080,()=>{
                console.log("I am Listening ....... ")
            });
        })
        .catch(error=>console.log("DB Connection problem"))



//Logger MW
server.use((request,response,next)=>{
    console.log(request.url,request.method);
    next();
});
server.use((request,response,next)=>{

    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Methods","GET,POST,DELETE,PUT,OPTIONS");
    response.header("Access-Control-Allow-Headers","Content-Type,Authorization")
    next();

})
// // // body parsing middleware
server.use(body_parser.json());
server.use(body_parser.urlencoded({extended:false}));

//Routers
server.use(authRouter);
server.use(userRouter);
server.use(orderRouter);


//Not Found MW
server.use((request,response)=>{
    response.status(404).json({meassge:"Page is Not Found"});
 });

//Error
server.use((error,request,response,next)=>{
    response.status(500).json({meassge:error+""});
});

module.exports = server