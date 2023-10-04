const screenshot = require('screenshot-desktop');
const Screenshots = require('../models/screenshot.model');

const captureScreenshot = (req, res, next) => {
    screenshot().then(async (img) => {
        let data = {
            image: img.toString('base64'),
            userId: 1,
        }
        const screenshot = new Screenshots(data)
        await screenshot.save();
        return res.status(200).json({ message: 'Screenshot saved to db' });
    }).catch((err) => {
        console.log(err)
    })

}

const getScreenshotsById = async (req, res, next) => {
    console.log("in it...")
    try {
        var screenshot = await Screenshots.find({ userId: req.params.id });
        if (screenshot !== null) {
            // screenshot.map(value=>{
            //     value.image = value.image.data.toString('base64')
            // })
            return res.status(200).json({ message: "Screenshots", data: screenshot });
        }
        else {
            return res.status(404).json({ message: "No Screenshots Captured" });
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

module.exports = {
    captureScreenshot,
    getScreenshotsById
}