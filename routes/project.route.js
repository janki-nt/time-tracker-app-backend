const express = require('express')
const router = express.Router();
const projectController = require('../controllers/project.controller')

router.post('/save', projectController.saveProject)


module.exports = router;