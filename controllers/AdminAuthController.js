const routes = require("express").Router();
const Admin  = require("../models/Admin"); 
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");
const key = require("../config/secretKey");

routes.post("/",async(req,res)=>{
    // console.log(req.body)
    let u = req.body.username;
    let p = req.body.password;
    let result = await Admin.find({ username : u});
    if(result.length == 1){
        if (result[0].password == sha1(p)){
            let obj = {id : result[0]._id};
            let token = jwt.sign(obj,key,{expiresIn : "2d"});
            res.send({success : true, admintoken : token })

        }else{
            res.send({success : false, errType : 2})
        }
    }
    else{
        res.send({success : false, errType : 1})
    }
});

module.exports = routes;