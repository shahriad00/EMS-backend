const Attendance = require('../models/attendance');
const catchAsync = require('../utils/catchAsync');

// add attendance ---- [employee panel]
const addAttendance = catchAsync(async (req, res) => {
    const { employeeID, name, month, date, year, present } = req.body;
    Attendance.find(
        {
            employeeID,
            month,
            date,
            year,
        },
        async (err, docs) => {
            let message = '';
            if (docs.length > 0) {
                message = "Today's attendance already given!";
            } else {
                message = 'Attendance marked Successfully!';
                await Attendance.create({
                    employeeID,
                    name,
                    year,
                    month,
                    date,
                    present,
                });
            }
            res.status(200).send({
                message,
            });
        }
    );
});

// get all attendance for single employee --- [employee panel]

const getAllAttendanceSingleEmployee = catchAsync(async (req, res) => {
    const id = req.params.id;

    Attendance.find({})
        .sort({ _id: -1 })
        .exec((err, docs) => {
            let singleEmployeeAttendance = docs.filter((attendance) => {
                return attendance.employeeID === id;
            });
            res.status(200).send(singleEmployeeAttendance);
        });
});

// get all attendance --- [admin panel]

const getAllAttendance = catchAsync(async (req, res) => {
    Attendance.find({})
        .sort({ _id: -1 })
        .exec((err, docs) => {
            let allAttendance = docs.map((attendance) => attendance);
            res.status(200).send(allAttendance);
        });
});

module.exports = {
    addAttendance,
    getAllAttendance,
    getAllAttendanceSingleEmployee,
};
