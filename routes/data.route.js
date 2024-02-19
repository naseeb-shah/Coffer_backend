const express = require("express");
const { DataModel } = require("../model/data.model");


const dataRouter = express.Router();

dataRouter.get("/", async (req, res) => {
  try {
    const query=  req.query
   const { page, limit }=query
page=page?page:1

let skip= page*10
    let data = await DataModel.find().skip(skip).limit(limit);
    res.send(data);
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

module.exports = {
    dataRouter
}