// External Packages
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

// Local Packages
const keys = require("../config/keys");

// Load models
const User = mongoose.model("users");

// Define passport functions
passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback"
		},
		(accessToken, refreshToken, profile, done) => {
			console.log(profile);
			User.findOne({ googleId: profile.id }).then(existingUser => {
				if (existingUser) {
					// we already have a record with the given profile id - do nothing
					console.log("user exists - using existing record");
					done(null, existingUser);
				} else {
					//we don't have a user with the the profile id - create new user
					console.log("new user - creating record");
					new User({
						googleId: profile.id,
						name: profile.displayName
					})
						.save()
						.then(newUser => done(null, newUser));
				}
			});
		}
	)
);
