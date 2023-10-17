const routes = require("express").Router();
const User = require('../models/User');
const {route} = require("./UserController");
const sha1 = require("sha1"); 
const jwt = require("jsonwebtoken");
const key = require("../config/secretKey");

routes.post("/",async(req,res)=>{
   console.log(req.body)
   let e = req.body.username ;
   let p = req.body.password;
   //    console.log(req.body); data front to back on nodemon
   let result = await User.find({username : e});
   console.log(result)
    if(result.length == 1){

    if(result[0].password == sha1(p)){
        let obj = {id : result[0]._id};
        let token = jwt.sign(obj, key, {expiresIn : '2d'});
        res.send({success : true, token : token, name : result[0].fullname});

      }
      else{
        res.send({success:false, errType : 2}); //username wrong password right
     }

}else{
   res.send({success:false, errType : 1});  //username right password wrong
}
})

module.exports = routes;  