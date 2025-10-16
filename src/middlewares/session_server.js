import cookieParser from "cookie-parser";
import session from "express-session";

const session_middleware = [
	cookieParser(),
	session({
		secret: process.env.JWT_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: {
			secure: process.env.NODE_ENV === "production" || false,
			maxAge: 600000,
		},
	}),
];
export default session_middleware;
