const Leave = require('../models/leave');
const catchAsync = require('../utils/catchAsync');

// add new employee
const ApplyForLeave = catchAsync(async (req, res) => {

    const {
        applicantID,
        name,
        title,
        type,
        startDate,
        endDate,
        description,
    } = req.body;

    await Leave.create({
        applicantID,
        name,
        title,
        type,
        startDate,
        endDate,
        description,
    });
    res.send({
        message: 'Leave application sent successfully',
        statusCode: 200,
    });
});

module.exports = {
    ApplyForLeave,
};