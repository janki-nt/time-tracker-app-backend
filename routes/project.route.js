const express = require('express')
const router = express.Router();
const projectController = require('../controllers/project.controller')

router.post('/save', projectController.saveProject);
router.get('/list/:id', projectController.getProjectsByOrgId);

module.exports = router;