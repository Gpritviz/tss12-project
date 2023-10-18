require("mongoose").connect("mongodb+srv://riya1109indorey:o6HmpBakqk1KY2ii@cluster0.ldvvgwg.mongodb.net/?retryWrites=true&w=majority").then(()=>{
  console.log("DATA BASE CONNECTED");
}).catch((err)=>{
       console.log("NOT CONNECTED--------",err); 
});
