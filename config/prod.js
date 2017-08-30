//prod.js production env keys - DO commit this!!!
module.exports = {
	// Google OAuth 2.0
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,

  // Cookie-session
	cookieKey: process.env.COOKIE_KEY
};
