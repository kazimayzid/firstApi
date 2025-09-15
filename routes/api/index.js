const express = require("express");
const apis = express.Router();
const registration = require("./auth")

apis.use("/auth", registration)

module.exports= apis