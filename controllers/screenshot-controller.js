const screenshot = require('screenshot-desktop');
const Screenshots = require('../models/screenshot.model');
const fs = require('fs');
const path = require('path');

const captureScreenshot = (req, res, next) => {
    const timestamp = Date.now();
    const user_id = req.body.userId;
    const directoryPath = `./uploads/screenshots/${user_id}`;
    if (!fs.existsSync(directoryPath)) {
        // If it doesn't exist, create it
        fs.mkdirSync(directoryPath, { recursive: true }, (err) => {
            if (err) {
                console.error('Error creating directory:', err);
            } else {
                console.log('Directory created successfully.');
            }
        });
    }
    let fileName = `screenshot_${timestamp}.png`
    const filePath = path.join(directoryPath, fileName);
    screenshot({ format: 'png' }).then(async (img) => {
        fs.writeFileSync(filePath, img, (err) => {
            if (err) { console.log(err) }
            console.log("File saved...")
        })
        let data = {
            image: img.toString('base64'),
            userId: user_id,
        }
        const screenshot = new Screenshots(data);
        await screenshot.save();
        return res.status(200).json({ message: 'Screenshot saved to db' });
    }).catch((err) => {
        console.log(err)
    })

}

const getScreenshotsById = async (req, res, next) => {
    try {
        var screenshot = await Screenshots.find({ userId: req.params.id });
        if (screenshot !== null) {
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