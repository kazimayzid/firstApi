const express = require("express");
const routes = express.Router();
const authRoutes = require("./api")
routes.use(process.env.BASE_URL, authRoutes)

module.exports = routes