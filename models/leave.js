var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LeaveSchema = new Schema({

    applicantID: {type: String, required: true},
    title: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
    startDate: {type: String, required: true},
    endDate: {type: String, required: true},
    description: {type: String, required: true},
    appliedDate: {type: String, default:new Date()},
    adminResponse: {type: String, default: 'pending'},

});


module.exports = mongoose.model('Leave', LeaveSchema);