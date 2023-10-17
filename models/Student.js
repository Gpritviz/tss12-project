require("../config/db");
const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
    name : String,
    age :  Number
})

module.exports = mongoose.model("student",StudentSchema);

