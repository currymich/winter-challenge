// External Packages
const passport = require("passport");

module.exports = app => {
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);

	app.get("/auth/google/callback", passport.authenticate("google"));

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	})

	//use this route to test which user is logged in (testing purposes)
	app.get("/api/current_user", (req, res) => {
		res.send(req.user);
	});
};
