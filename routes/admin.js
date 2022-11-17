let express = require('express');
let router = express.Router();
let employee = require('../controllers/EmployeeController') 
let leave = require('../controllers/LeaveController') 

router.post('/api/employee',employee.addEmployee);

router.get('/api/all-employees',employee.getAllEmployee);

router.patch('/api/-employee/:id',employee.updateEmployee);

router.get('/api/all-applied-leave-applications',leave.getAllAppliedLeaves);

router.get('/api/leave-application/:id',leave.getSingleAppliedLeaves);

router.patch('/api/leave-application/:id',leave.updateResponseSingleLeaves);

router.get('/api/employee-details/:id',employee.getSingleEmployee)

router.delete('/api/delete-employee/:id',employee.deleteSingleEmployee)

module.exports = router;