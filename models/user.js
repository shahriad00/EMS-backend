let mongoose = require('mongoose');
require('mongoose-type-email');

let Schema = mongoose.Schema;

let UserSchema = new Schema({

    isAdmin: {type: Boolean},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    // dateOfBirth: {type: Date, required: true},
    // contactNumber: {type: String, required: true},
    // department: {type: String, required: true},
    // designation:{type: String, required: true},
    // Address: {type: String, required: true},
    // dateAdded: {type: Date}

});

module.exports = mongoose.model('User', UserSchema);