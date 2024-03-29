var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({

    employeeID: {type: String, required: true},
    name: {type: String, required: true},
    title: {type: String, required: true},
    type: {type: String, required: true},
    status: {type: String, required: true},
    description: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},

});


module.exports = mongoose.model('Project', ProjectSchema);