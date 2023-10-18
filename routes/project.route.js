const express = require('express')
const router = express.Router();
const projectController = require('../controllers/project.controller')

router.post('/save', projectController.saveProject);
router.get('/list/:id', projectController.getProjectsByOrgId);
router.get('/project-detail/:id', projectController.getProjectsById);

module.exports = router;