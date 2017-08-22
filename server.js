// External Packages
const express = require("express");
const authRoutes = require("./routes/authRoutes");
require("./services/passport");

// Middleware config
const app = express();

// Routes
authRoutes(app);

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log("Server listening on 5000");
});
