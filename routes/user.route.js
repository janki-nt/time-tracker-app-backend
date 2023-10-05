const express = require('express')
const router = express.Router();
const userController = require('../controllers/user.controller.js')

router.post('/save', userController.registerUser);
router.post('/login', userController.login);
router.get('/all', userController.getAllUsers);
router.get('/user-detail/:id', userController.getUserById);
router.put('/update/:id', userController.updateUserDetailsById);
router.delete('/delete/:id', userController.deleteUserById);


module.exports = router;