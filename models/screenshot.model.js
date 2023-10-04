const mongoose = require("mongoose");
const { Schema } = mongoose;

const ScreenshotSchema = new Schema({
    image: String,
    userId: Number,
},
    { timestamps: true }
);

const Screenshots = mongoose.model("screenshots", ScreenshotSchema);

module.exports = Screenshots;
