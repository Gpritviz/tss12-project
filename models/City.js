require("../config/db");
const mongoose = require("mongoose");

const CitySchema = mongoose.Schema({
      id : String,
      name : String,
      state : String,
   
});

module.exports = mongoose.model("city",CitySchema);