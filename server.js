// External Packages
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const path = require('path');
const bodyParser = require('body-parser');

// Local Packages
const keys = require("./config/keys");

// DB config
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost/emaily";

mongoose.connect(mongoURI, {useMongoClient: true});
mongoose.Promise = global.Promise;

// Models
require("./models/User");

// Services
require("./services/passport");

// Middleware start
const app = express();
const db = mongoose.connection;
app.use(bodyParser.json());

// Auth config
app.use(
	cookieSession({
		maxAge: 10800000, // 1 day
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

// Route Files
require("./routes/authRoutes")(app);

if (process.env.NODE_ENV === 'production') {
  // express will serve production assets (main.js/css)
	app.use(express.static('client/build'));

  // express will serve index.html if unrec. route
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	});
}

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log("Server listening on 5000");
});
