const Leave = require('../models/leave');
const User = require('../models/user');
const catchAsync = require('../utils/catchAsync');

// add new employee
const ApplyForLeave = catchAsync(async (req, res) => {
    const { applicantID, name, title, type, startDate, endDate, description } =
        req.body;

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

//get applied Leave applications
const getAppliedLeaves = catchAsync(async (req, res) => {
    const id = req.params.id;

    let leaveChunks = [];

    Leave.find({})
        .sort({ _id: -1 })
        .exec(function findAllLeaves(err, docs) {
            for (let i = 0; i < docs.length; i++) {
                if(docs[i]['applicantID'] == id){
                    leaveChunks.push(docs[i]);
                }
            }
            res.status(200).send(leaveChunks);
        });
});

module.exports = {
    ApplyForLeave,
    getAppliedLeaves,
};
