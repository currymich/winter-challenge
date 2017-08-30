// External Packages
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

// Local Packages
const keys = require("./config/keys");

// DB config
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost/emaily";

mongoose.connect(mongoURI);

// Models
require("./models/User");

// Services
require("./services/passport");

// Middleware start
const app = express();
const db = mongoose.connection;

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
const authRoutes = require("./routes/authRoutes");

// Routes
authRoutes(app);

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log("Server listening on 5000");
});
