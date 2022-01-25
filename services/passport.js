// External Packages
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const { validPassword, genPassword } = require("./authHelpers");

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
    console.log(email, password);
    User.findOne({ email: email }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Email not found" });
      }
      if (user && !user.password && !user.salt) {
        const { salt, hash } = genPassword(password);

        User.findOneAndUpdate(
          { email },
          { password: hash, salt: salt },
          { new: true },
          (err, updatedUser) => {
            console.log(updatedUser);
          }
        );
        return done(null, user);
      }
      if (!validPassword(password, user.password, user.salt)) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    });
  })
);
