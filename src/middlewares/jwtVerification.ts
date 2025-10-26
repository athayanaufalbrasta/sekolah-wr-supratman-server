import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtUserPayload } from "../types/express";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
	throw new Error("JWT_SECRET is not defined");
}

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) return res.status(401).json({ message: "Missing Authorization header" });

	const token = authHeader.split(" ")[1];
	jwt.verify(token, JWT_SECRET, (err, user) => {
		if (err) {
			console.error("JWT Verification Error:", err.message);
			return res.status(403).json({ message: "Invalid token or token expired" });
		}

		req.user = user as JwtUserPayload;

		next();
	});
};

export default authenticateJWT;
