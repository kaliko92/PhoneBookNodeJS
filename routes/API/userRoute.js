const express = require('express');
const userController = require('../../controllers/API/user.controller');

const router = express.Router();

router.post('/sign-up', userController.signUp);
router.post('/login', userController.login);

module.exports = router;