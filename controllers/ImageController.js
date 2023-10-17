const routes = require("express").Router();
const path = require("path");

routes.post("/",async(req,res)=>{
    // console.log(req.body);
    // console.log(req.files)
    // console.log("---------req.body");

    let filedata = req.files.image;
    filedata.mv(path.resolve()+'/assets/images/'+filedata.name,(err)=>{
        if(err){
            console.log(err);
            return;
        }
        res.send({success : true})
    })

})


module.exports = routes;