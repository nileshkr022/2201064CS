const express = require("express");
const cors = require("cors");
const numberRoutes = require("./src/routes/numberRoutes.js");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/numbers",numberRoutes);

module.exports= app;