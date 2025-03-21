require("dotenv").config();
const express = require("express");
const cors = require("cors");
const numberRoutes = require("./src/routes/numberRoutes.js");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use("/numbers",numberRoutes);
app.listen(PORT,()=>{
    console.log(`server running at localhost:${9876}`);
});
