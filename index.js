require('dotenv').config()
const express = require("express");
const routes = require("./routes");
const dbConnection = require("./db/dbConnection");
const app = express();

const port = 3000;
dbConnection();
app.use(routes);

app.listen(port, () => {
  console.log("server is connected");
});
