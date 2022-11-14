let express = require('express');
let router = express.Router();
let leave = require('../controllers/LeaveController') 

router.post('/api/apply-for-leave',leave.ApplyForLeave);



module.exports = router;