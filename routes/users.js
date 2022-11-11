const express = require('express')
var router = express.Router();
const user = require('../controllers/UserController')
const Auth = require('../controllers/UserAuthController')


router.post('/api/user/register', user.addUser);
router.post('/api/user/login',Auth.login);
router.post('/api/user/logout',Auth.logOut);



module.exports = router;
