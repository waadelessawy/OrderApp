
const jwt=require("jsonwebtoken");


module.exports=(request,response,next)=>{
  let token,decodedToken;
 if(request.method != "OPTIONS"){
   try
   {
       token=request.get("Authorization").split(" ")[1];
   
       decodedToken= jwt.verify(token,"HelloWorld");
       console.log("token ",token)
     

   }
   catch(error)
   {
       next(new Error("Not Authenticated"))
        
   }

}
next();
 
}