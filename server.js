const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const connectDB = require("./db");

const coder = require("./routes/api/coder");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS, DELETE');
    next();
  });

app.use(morgan("dev"));
app.use(helmet());
connectDB();

app.use("/api/v1", coder);

app.listen(PORT, () => console.log(`API Server listening on port ${PORT}`));

module.exports = app;
