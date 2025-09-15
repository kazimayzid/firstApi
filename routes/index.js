const express = require("express");
const routes = express.Router();
const authRoutes = require("./api")
routes.use("/api/v1", authRoutes)

module.exports = routes