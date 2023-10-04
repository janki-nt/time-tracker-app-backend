const TimeEntry = require("../models/time-entry.model");


const addTimeEntries = async (req, res, next) => {
    try {
        var time_entry = new TimeEntry(req.body);
        await time_entry.save();
        return res.status(200).json({ data: time_entry, message: "Time Entry Added" });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};


const getTimeEntriesById = async (req, res, next) => {
    try {
        var time_entry = await TimeEntry.find({ userId: req.params.id });
        if (time_entry !== null) {
            return res.status(200).json({ message: "Time Entries List", data: time_entry });
        }
        else {
            return res.status(404).json({ message: "No Time Entries Listed" });
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

module.exports = {
    addTimeEntries,
    getTimeEntriesById
}