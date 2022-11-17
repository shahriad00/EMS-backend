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
        let allEmployees = [];

        Employees.forEach(function (employee) {
            allEmployees.unshift(employee);
        });

        res.send(allEmployees);
    });
});

//update Employee

const updateEmployee = catchAsync(async (req, res) => {
  const _id = req.params.id
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

    const employee = await Employee.findOneAndUpdate(
        { _id },
        {
                name,
                email,
                dateOfBirth,
                contactNumber,
                department,
                salary,
                designation,
                address,
            
        }
    );
    await employee.save();
    res.status(200).send({
        message: 'Employee Updated successfully'
    });
});


// get single employee
const getSingleEmployee = catchAsync(async (req, res) => {
    const _id = req.params.id;
    const employee = await Employee.findOne({_id})
    res.status(200).send(employee);
});


// delete single employee
const deleteSingleEmployee = catchAsync(async (req, res) => {
    const _id = req.params.id;
    await Employee.findByIdAndDelete({_id})
    res.status(200).send({
        message:'Employee removed successfully'
    });
});


module.exports = {
    addEmployee,
    getAllEmployee,
    updateEmployee,
    getSingleEmployee,
    deleteSingleEmployee
};
