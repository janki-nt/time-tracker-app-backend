const express = require('express')
const router = express.Router();
const timeEntryController = require('../controllers/time-entry-controller');

router.post('/saveTimeEntries', timeEntryController.addTimeEntries );

router.get('/getTimeEntries/:id', timeEntryController.getTimeEntriesById);

module.exports = router;