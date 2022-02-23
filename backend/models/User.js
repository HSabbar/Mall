const mongoose = require('mongoose');

// Schema for users of app
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    }
});

module.exports = mongoose.model('user', UserSchema);