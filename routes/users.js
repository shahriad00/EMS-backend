const express = require('express')
var router = express.Router();
const user = require('../controllers/UserController')
const Auth = require('../controllers/UserAuthController')


router.post('/api/user/register', user.addUser);
router.post('/api/user/login',Auth.login);
router.post('/api/user/logout',Auth.logOut);

router.get('/api/all-employee-users',user.getEmployeeUsers);
router.get('/api/all-users',user.getAllUsers);
router.delete('/api/user/:id',user.deleteUser);

module.exports = router;
