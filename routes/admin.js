let express = require('express');
let router = express.Router();
let employee = require('../controllers/EmployeeController');
let leave = require('../controllers/LeaveController');
let project = require('../controllers/ProjectController');

router.post('/api/employee',employee.addEmployee);

router.get('/api/all-employees',employee.getAllEmployee);

router.patch('/api/employee/:id',employee.updateEmployee);

router.get('/api/all-applied-leave-applications',leave.getAllAppliedLeaves);

router.get('/api/leave-application/:id',leave.getSingleAppliedLeaves);

router.patch('/api/leave-application/:id',leave.updateResponseSingleLeaves);

router.get('/api/employee-details/:id',employee.getSingleEmployee)

router.delete('/api/delete-employee/:id',employee.deleteSingleEmployee)

//--------- project routes -----------------

router.post('/api/project',project.addProject);

// all projects from single employee
router.get('/api/all-project/:id',project.getAllProjects);

router.get('/api/project/:id',project.getSingleProject);

router.patch('/api/project/:id',project.updateProject);

router.delete('/api/project/:id',project.deleteSingleProject);




module.exports = router;