const jwt = require('jsonwebtoken');


module.exports.login = (request, response, next) => {

  let token;
  if (request.body.email == "waad.elessawy@gmail.com" && request.body.password == "123") {
    token = jwt.sign({
      _id: 1,
      email: request.body.email
      , role: "admin"
    },
      "HelloWorld",
      { expiresIn: "1h" });


    response.status(200).json({ msg: "login", token, role: "admin" })

  
  }


}