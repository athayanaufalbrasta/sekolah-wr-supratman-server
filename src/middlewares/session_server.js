const session = require("express-session");
const cookie_parser = require("cookie-parser");

const session_middleware = [
	cookie_parser(),
	session({
		secret: process.env.JWT_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: {
			secure: false,
			maxAge: 600000,
		},
	}),
];
export default session_middleware;
