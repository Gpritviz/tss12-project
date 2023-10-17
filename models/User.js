 require("../config/db");
 const mongoose = require("mongoose");

 const UserSchema = mongoose.Schema({
    fullname : String,
    username : String,
    password : String,
    address : String,
    contact : String,
    state : String,
    city : String
 });

 module.exports = mongoose.model("user",UserSchema);