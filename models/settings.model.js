var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const settingsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    idleTime: {
        type: Number,
        default: 900000, // 15 minutes in milliseconds (15 * 60 * 1000)
    },
    screenshot_interval: {
        type: Number,
        default: 300000
    },
    assignedProjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
}, { timestamps: true });


const Setting = mongoose.model("settings", settingsSchema);

module.exports = Setting;

