const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    role: {type: String, default: 'employee'},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    dateAdded: {type: Date, default: new Date()}

});

module.exports = mongoose.model('User', UserSchema);