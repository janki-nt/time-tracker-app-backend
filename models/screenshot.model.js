const mongoose = require("mongoose");
const { Schema } = mongoose;

const ScreenshotSchema = new Schema({
    image: String,
    userId: String,
},
    { timestamps: true }
);

const Screenshots = mongoose.model("screenshots", ScreenshotSchema);

module.exports = Screenshots;
