import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;

const authenticateJWT = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) return res.status(401).json({ message: "Missing Authorization header" });

	const token = authHeader.split(" ")[1];
	jwt.verify(token, JWT_SECRET, (err, user) => {
		if (err) return res.status(403).json({ message: "Invalid token" });
		req.user = user;
		next();
	});
};
export default authenticateJWT;
