const routes = require("express").Router();
const City = require("../models/City");

routes.get("/",async(req,res)=>{
    let result = await City.find(); 
    // console.log("****************")
    // console.log(result)
    res.send(result);

});

routes.get("/state",async(req,res)=>{
    let result = await City.distinct("state");
    res.send(result);
})

routes.get("/state/:a",async(req,res)=>{
    let b = req.params.a;
    let result = await City.find({state : b})
    res.send(result);     
})

module.exports = routes;