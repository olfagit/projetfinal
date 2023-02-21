const express = require("express");
const {
  Addcv,
  getcv,
  updatecv,
  deletcv,
} = require("../controllers/cvControlers")

const cvRoute = express.Router()

cvRoute.post("/Addcv", Addcv)
cvRoute.get("/getcv", getcv)
cvRoute.put("/editcv/:id", updatecv)
cvRoute.delete("/deletcv/:id", deletcv)

module.exports = cvRoute
