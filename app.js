const express = require("express");
const dotenv = require("dotenv");
// const connectDB = require("./config/db")

const app = express();
app.use(express.json());

// app.use("/api/auth", authRoute);
app.use("/api/restaurant", restaurantRoute);
app.use("/api/menus", menuRoute);

module.exports = app;
