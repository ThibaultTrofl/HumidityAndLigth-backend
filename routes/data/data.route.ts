import express = require("express");
const data = express.Router();
// const mongoose = require("mongoose");

// require("dotenv").config();

const { postData } = require("./dataController/postData.ts");

data.post("/data", postData);

module.exports = data;
