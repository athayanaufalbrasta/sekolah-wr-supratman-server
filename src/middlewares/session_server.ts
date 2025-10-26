import cookieParser from "cookie-parser";
import { config } from "dotenv";
import session from "express-session";
config();

if (!process.env.JWT_SECRET) {
	throw new Error("JWT_SECRET environment variable is not set.");
}

const session_middleware = [
	cookieParser(),
	session({
		secret: process.env.JWT_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: {
			secure: Boolean(process.env.NODE_ENV === "production"),
			maxAge: 600000,
		},
	}),
];
export default session_middleware;
