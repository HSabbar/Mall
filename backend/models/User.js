const mongoose = require('mongoose');

// Schema for users of app
const UserSchema = new mongoose.Schema({
    nom: {
        type: String,
    },
    prenom: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
});

module.exports = mongoose.model('user', UserSchema);