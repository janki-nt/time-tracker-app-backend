const express = require('express')
const router = express.Router();
const captureScreenshotController = require('../controllers/screenshot-controller.js')

router.post('/capture', captureScreenshotController.captureScreenshot);
router.get('/getScreenshots/:id', captureScreenshotController.getScreenshotsById);

module.exports = router;