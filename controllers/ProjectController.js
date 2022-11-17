const { findByIdAndUpdate } = require('../models/project');
const Project = require('../models/project');
const catchAsync = require('../utils/catchAsync');

// add new project
const addProject = catchAsync(async (req, res) => {
    const { employeeID, name,title, type, startDate, endDate, status, description } =
        req.body;

    await Project.create({
        employeeID,
        title,
        name,
        type,
        startDate,
        endDate,
        status,
        description,
    });
    res.send({
        message: 'Project Added successfully',
        statusCode: 200,
    });
});


// update project
const updateProject = catchAsync(async (req, res) => {
    const _id = req.params.id;
    const { title, type, startDate, endDate, status, description } =
        req.body;
    
    const project = await findByIdAndUpdate({_id},{
        title,
        type,
        startDate,
        endDate,
        status,
        description,
    })
    await project.save();
    res.send({
        message: 'Project updated successfully',
        statusCode: 200,
    });
});

//get ALL projects for single employee
const getAllProjects = catchAsync(async (req, res) => {
    const id = req.params.id;

    Project.find({})
        .sort({ _id: -1 })
        .exec(function findAllProjects(err, docs) {
            let ProjectsChunks = docs.filter(({employeeID})=> employeeID == id)

            res.status(200).send(ProjectsChunks);
        });
});

//get single project
const getSingleProject = catchAsync(async (req, res) => {
    const _id = req.params.id;

    const projectDetails = await Project.findById({ _id });
    res.status(200).send(projectDetails);
});

//delete single project
const deleteSingleProject = catchAsync(async (req, res) => {
    const _id = req.params.id;

    await Project.findByIdAndDelete({ _id });
    res.status(200).send({
        message: 'Project deleted successfully'
    });
});



module.exports = {
    addProject,
    updateProject,
    getAllProjects,
    getSingleProject,
    deleteSingleProject
};
