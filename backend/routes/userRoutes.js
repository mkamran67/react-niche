const express = require('express');
const router = express.Router();
const { authUser, registerUser } = require('../controllers/userController.js');

// Route -> /api/user/
router.route('/').post(registerUser);
router.route('/login').post(authUser);

module.exports = router;
