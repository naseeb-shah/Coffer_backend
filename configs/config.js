const mongoose = require("mongoose")
require("dotenv").config()
const connection = mongoose.connect("mongodb+srv://naseebshah:naseebshahdeen@cluster0.b2nqg.mongodb.net/dataone?retryWrites=true&w=majority")

module.exports = {
    connection
}