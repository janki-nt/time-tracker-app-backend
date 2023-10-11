const express = require('express')
const router = express.Router();
const settingsController = require('../controllers/settings.controller')

router.post('/save', settingsController.saveSettings)

router.get('/update/:id', settingsController.updateSettingsByUserId)

router.get('/setting-detail/:id',settingsController.getSettingsByUserId)

module.exports = router;