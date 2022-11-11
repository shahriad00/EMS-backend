const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({

    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    dateOfBirth: {type: Date},
    contactNumber: {type: String},
    department: {type: String},
    designation:{type: String},
    salary:{type: String},
    address: {type: String},
    dateAdded: {type: Date},
    type:{type:String, default: 'employee'}

});

module.exports = mongoose.model('Employee', EmployeeSchema);