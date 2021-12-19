// External Packages
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const path = require("path");
const logger = require("morgan");
const MongoStore = require("connect-mongo");

// Local Packages
const keys = require("./config/keys");

// DB config
const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost/winter_challenge";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

// Models
require("./models/User");
require("./models/Goal");

// Services
require("./services/passport");

// Middleware start
const app = express();
const db = mongoose.connection;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Auth config
app.use(
  session({
    secret: keys.cookieKey,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: mongoURI,
      collectionName: "sessions",
    }),
    cookie: {
      maxAge: 10800000, // 1 day
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));

// Route Files
require("./routes/authRoutes")(app);
require("./routes/goalRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // express will serve production assets (main.js/css)
  app.use(express.static("client/build"));

  // express will serve index.html if unrec. route
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server listening on 5000");
});
