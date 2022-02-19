// For backend and express
const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');


const Event = require('./models/Event');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(session({
    secret: "secretCode",
	resave: true,
	saveUninitialized: true
}));



app.use(cookieParser("secretCode"))

app.use(cors({
	origin: "http://localhost:3000",
	credentials: true
}))
// To connect with your mongoDB database
mongoose.connect('mongodb://localhost:27018/', {
	dbName: 'Events',
	useNewUrlParser: true,
	useUnifiedTopology: true
}, err => err ? console.log(err) :
	console.log('Connected to Events database'));

//Event.createIndexes();

console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());

app.get("/", async (req, res, next) => {
	const events = await Event.find({});
	res.status(200).json(events);
});

app.post("/register", (req, res) => {
	console.log(req.body);
})

app.post("/login", (req, res) => {
	console.log(req.body);
})

app.get("/user", (req, res) => {})

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

app.post("/UpdateEvent", async (req, resp) => {
	try {
		const user_id = req.body.updatedEvent._id
		const event = { start: req.body.updatedEvent.start, end: req.body.updatedEvent.end };
		console.log(event);
		let result = await Event.findByIdAndUpdate(user_id, event);
		if (result) {
			resp.send(req.body.updatedEvent);
		} else {
			console.log("Event already add");
		}
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});
app.listen(5000);
