// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27018/', {
	dbName: 'Events',
	useNewUrlParser: true,
	useUnifiedTopology: true
}, err => err ? console.log(err) :
	console.log('Connected to Events database'));

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
const Event = mongoose.model('event', EventSchema);
Event.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());

app.get("/", async (req, res, next) => {
    const events = await Event.find({});
    res.status(200).json(events);
});


app.post("/AddEvent", async (req, resp) => {
	try {
		const event = new Event(req.body);
		let result = await event.save();
		result = result.toObject();
		if (result) {
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("Event already add");
		}


	} catch (e) {
		resp.send("Something Went Wrong");
	}
});
app.listen(5000);
