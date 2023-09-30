const express = require('express');
const router = express.Router();
const controller = require('./user_controller');
const middleware = require('./user_middleware');

router.post('/signup', middleware.validateUser, controller.createUser);
router.post('/login', middleware.validateLogin, controller.LoginUser);
module.exports = router;
