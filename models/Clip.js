const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClipSchema = new Schema({ 
    videoSrc: String,
    market: String,
    station: String,
    title: String,
    snippet: String,
    coder: String,
    seek: String,
    start: Number,
    stop: Number,
}, { timestamps: true });

module.exports = mongoose.model("Clip", ClipSchema);