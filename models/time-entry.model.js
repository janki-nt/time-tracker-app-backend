const mongoose = require("mongoose");
const { Schema } = mongoose;

const TimeEntrySchema = new Schema({
    startTime: {
        type: Date
    },
    endTime: {
        type: Date
    },
    userId: {
        type: String
    },
    project:{
        type: String,
        default: 'Default Project'
    },
    mouseCount: Number,
    keyboardCount: Number,
});

const TimeEntry = mongoose.model("time-entries", TimeEntrySchema);

module.exports = TimeEntry;
