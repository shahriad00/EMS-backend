const Employee = require('../models/employee');
const catchAsync = require('../utils/catchAsync');

// add new employee
const addEmployee = catchAsync(async (req, res) => {
    const {
        name,
        email,
        dateOfBirth,
        contactNumber,
        department,
        salary,
        designation,
        address,
    } = req.body;

    await Employee.create({
        email,
        name,
        dateOfBirth,
        contactNumber,
        department,
        salary,
        designation,
        address,
    });
    res.send({
        message: 'Employee added successfully',
        statusCode: 200,
    });
});

// get employee
const getAllEmployee = catchAsync(async (req, res) => {
    Employee.find({}, function (err, Employees) {
        let employeeMap = [];

        Employees.forEach(function (employee) {
            employeeMap.unshift(employee);
        });

        res.send(employeeMap);
    });
});

//update Employee

const updateEmployee = catchAsync(async (req, res) => {
  const {_id} = req.params
    const {
        name,
        email,
        dateOfBirth,
        contactNumber,
        department,
        salary,
        designation,
        address,
    } = req.body;

    await Employee.findOneAndUpdate(
        { _id },
        {
            $set: {
                name,
                email,
                dateOfBirth,
                contactNumber,
                department,
                salary,
                designation,
                address,
            },
        },
        { new: true }
    );

    await Employee.create({
        email,
        name,
        dateOfBirth,
        contactNumber,
        department,
        salary,
        designation,
        address,
    });
    res.send({
        message: 'Employee added successfully',
        statusCode: 200,
    });
});



module.exports = {
    addEmployee,
    getAllEmployee,
    updateEmployee,
};
