const Setting = require("../models/settings.model");

const saveSettings = async (req, res, next) => {
    console.log(req.body)
    try {
        var setting = new Setting(req.body);
        await setting.save();
        return res.status(200).json({ data: setting, message: "Settings Added." });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};


const getSettingsByUserId = async (req, res, next) => {
    try {
        var setting = await Setting.find({ userId: req.params.id });
        if (setting !== null) {
            return res.status(200).json({ message: "Setting details retrieved", data: setting });
        }
        else {
            return res.status(404).json({ message: "No Setting Found", data: setting });
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

const updateSettingsByUserId = async (req, res, next) => {
    try {
        const settingsUpdateData = req.body;
        var setting = await Setting.findOneAndUpdate({ userId: req.params.id }, settingsUpdateData);
        if (setting) {
            return res.status(200).json({ message: "Setting details updated", data: setting });
        } else {
            return res.status(404).json({ message: "No Setting Found", data: setting });
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};


module.exports = {
    saveSettings,
    updateSettingsByUserId,
    getSettingsByUserId
}