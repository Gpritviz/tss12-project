require("mongoose").connect("mongodb://0.0.0.0:27017/new_blog").then(()=>{
  console.log("DATA BASE CONNECTED");
}).catch((err)=>{
       console.log("NOT CONNECTED--------",err); 
});
