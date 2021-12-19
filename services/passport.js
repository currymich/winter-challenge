// External Packages
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const { validPassword } = require("./authHelpers");

// Local Packages
const keys = require("../config/keys");

// Load models
const User = mongoose.model("users");

// Define passport functions
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Email not found" });
      }
      if (!validPassword(password, user.password, user.salt)) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    });
  })
);
