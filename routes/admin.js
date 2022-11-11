let express = require('express');
let router = express.Router();
let employee = require('../controllers/EmployeeController') 

router.post('/api/employee',employee.addEmployee);

router.get('/api/all-employees',employee.getAllEmployee);

router.patch('/api/-employee/:id',employee.updateEmployee);

module.exports = router;