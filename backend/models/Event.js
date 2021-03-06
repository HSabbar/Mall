const mongoose = require('mongoose');

// Schema for users of app
const EventSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	start: {
		type: Date,
		required: true,
	},
	end: {
		type: Date,
		required: true,
	},
});

module.exports = mongoose.model('event', EventSchema);