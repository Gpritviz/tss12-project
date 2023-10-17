const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1")

routes.get("/",async(req,res)=>{
    let result = await User.find(); //database se search krke front pr
    res.send(result);

});

routes.post("/signup",async(req,res)=>{

    console.log(req.body)
    delete req.body.repassword;
    req.body.password=sha1(req.body.password);
    await User.create (req.body);
    res.send({success : true});
});

module.exports = routes;