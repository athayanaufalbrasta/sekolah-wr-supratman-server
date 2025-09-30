import express from "express";
import { login, register, forgotPassword, resetPassword } from "../controllers/authController.js";
import { validasiLogin, validasiRegister, validasiForgotPassword, validasiResetPassword, validasiRefreshToken } from "../validators/authValidator.js";
import authenticateJWT from "../middlewares/jwtVerification.js";
const router = express.Router();

router.get("/auth-status", authenticateJWT, (req, res) => res.json({ loggedIn: true, user_info: [req.user_id] }));
router.post("/login", validasiLogin, login);
router.post("/register", validasiRegister, register);
router.post("/forgot-password", validasiForgotPassword, forgotPassword);
router.post("/reset-password", validasiResetPassword, resetPassword);
router.post("clear-session", (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			console.error("Failed to destroy session during logout", err);
			return res.status(500).json({ message: "Logout failed" });
		}
		res.clearCookie("connect.sid");
		res.status(200).json({ message: "Logged out successfully" });
	});
});

export default router;
