const express = require('express')
const router = express.Router();
const organizationController = require('../controllers/organization.controller')

router.post('/save', organizationController.saveOrganization)

router.get('/update/:id', organizationController.updateOrganization)

router.get('/detail/:id',organizationController.getOrganizationDataByUserId)

module.exports = router;