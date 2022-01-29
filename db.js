const mongoose = require("mongoose");
require("dotenv/config");

const connectDB = async() => {
    await mongoose.connect(process.env.URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })


    console.log("mongoDB successfully connected");
}

module.exports = connectDB;