const Leave = require('../models/leave');
const catchAsync = require('../utils/catchAsync');

// add new employee leave
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

//get applied Leave applications - for Employee
const getAppliedLeaves = catchAsync(async (req, res) => {
    const id = req.params.id;

    let leaveChunks = [];

    Leave.find({})
        .sort({ _id: -1 })
        .exec(function findAllLeaves(err, docs) {
            for (let i = 0; i < docs.length; i++) {
                if (docs[i]['applicantID'] == id) {
                    leaveChunks.push(docs[i]);
                }
            }
            res.status(200).send(leaveChunks);
        });
});

//get all applied Leave applications - for Admin
const getAllAppliedLeaves = catchAsync(async (req, res) => {
    
    Leave.find({})
        .sort({ _id: -1 })
        .exec(function findAllEmployeeLeaves(err, docs) {
           let totalLeaveChunks = docs.map(item => item)
            res.status(200).send(totalLeaveChunks);
        });
});


//get single applied Leave application - for Admin
const getSingleAppliedLeave = catchAsync(async (req, res) => {
    const _id = req.params.id;

    const leaveDetails = await Leave.findById({_id})
    res.status(200).send(leaveDetails);
    
});

//Update admin response for single applied Leave application - for Admin

const updateResponseSingleLeave = catchAsync(async (req, res) => {
    const _id = req.params.id;
    const {adminResponse} = req.body;

    const info = await Leave.findOneAndUpdate({_id},{
        adminResponse
    })
    await info.save()
    res.status(200).send({
        message: 'Admin response update successfully'
    });
    
});


//delete single Applied Leave
const deleteSingleAppliedLeave = catchAsync(async (req, res) => {
    const _id = req.params.id;

    await Leave.findByIdAndDelete({ _id });
    res.status(200).send({
        message: 'Leave deleted successfully'
    });
});

module.exports = {
    ApplyForLeave,
    getAppliedLeaves,
    getAllAppliedLeaves,
    getSingleAppliedLeave,
    deleteSingleAppliedLeave,
    updateResponseSingleLeave,
    
};
