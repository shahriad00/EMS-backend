let express = require('express');
let router = express.Router();
let leave = require('../controllers/LeaveController'); 
let attendance = require('../controllers/AttendanceController');

router.post('/api/apply-for-leave',leave.ApplyForLeave);
router.get('/api/applied-leave-applications/:id',leave.getAppliedLeaves);

// attendance router
router.post('/api/mark-attendance',attendance.addAttendance);

router.get('/api/all-attendance/:id',attendance.getAllAttendanceSingleEmployee);



module.exports = router;