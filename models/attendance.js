var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AttendanceSchema = new Schema({

    employeeID: {type: String, required: true},
    name: {type: String, required: true},
    year: {type: Number, required: true},
    month: {type: Number, required: true},
    date: {type: Number, required: true},
    fullDate: {type: String, default: new Date()},
    present: {type: Boolean, required: true},

});


module.exports = mongoose.model('Attendance', AttendanceSchema);