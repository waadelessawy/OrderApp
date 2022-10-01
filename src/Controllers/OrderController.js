const {validationResult}=require("express-validator");
const Orders = require("../Models/Orders");


//Get All User Orders By Id
module.exports.getUserOrderById=(request,response)=>{
    Orders.find({userId:request.params.id})
           .then(data=>{
               response.status(200).json(data);
               console.log(data);
           })
}


//Create New Order
module.exports.createOrder=(request,response,next)=>{
    let result = validationResult(request);
    if(!result.isEmpty()){
        let message=result.array().reduce((current,error)=>current+error.msg," ");
        let error = new Error(message);
        error.status=422;
        throw error;

    }
    let order = new Orders({
      
     _id:request.body._id,
    userId:request.body.userId,
    totalPrice:request.body.totalPrice,
    status: request.body.status,
    createdAt: request.body._id.createdAt 
    })
    order.save()
    .then((data)=>{ 
        console.log("here")
        response.status(200).json({message:"order created",data})

    }).catch(error=>next(error));
}

//Accept Or Reject Order By Updating Order
module.exports.acceptOrRejectOrder=(request,response,next)=>{
 
    Orders.updateOne({_id:request.params.id},{
        $set:{
         
            status:request.body.status
        }
    }).then(data=>{
        if(data.matchedCount==0)
        throw new Error("Order not exists");
        response.status(200).json({message:"Order Updated",data});

    })
    .catch(error=>next(error))

        
}


