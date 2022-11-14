let express = require('express');
let router = express.Router();
let leave = require('../controllers/LeaveController') 

router.post('/api/apply-for-leave',leave.ApplyForLeave);
router.get('/api/applied-leave-applications/:id',leave.getAppliedLeaves);



module.exports = router;