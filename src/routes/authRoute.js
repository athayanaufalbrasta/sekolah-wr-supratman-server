import express from "express";
import { login, register, forgotPassword, resetPassword } from "../controllers/authController.js";
// import { validasiLogin, validasiRegister, validasiForgotPassword, validasiResetPassword } from "../validators/authValidator.js";
import authenticateJWT from "../middlewares/jwtVerification.js";
const router = express.Router();

router.get(
	"/auth-status",
	authenticateJWT,
	(req, res) => {
		if (!req.user) return res.status(401).json({ loggedIn: false });
		res.json({ loggedIn: true, user_info: req.user });
	},
	/**
	 * #swagger
	 * #swagger.tags = ['Auth']
	 * #swagger.path = '/api/v1/auth/auth-status'
	 * #swagger.description = 'Cek status autentikasi pengguna saat ini.'
	 * #swagger.summary = 'Cek status autentikasi pengguna saat ini.'
	 * #swagger.method = 'get'
	 * #swagger.security = [{ "BearerAuth": [] }]
	 * #swagger.responses[200] = { description: 'Authenticated' }
	 * #swagger.responses[401] = { description: 'Unauthorized' }
	 */
);

router.post(
	"/login",
	// validasiLogin,
	login,
	/**
	 * #swagger
	 * #swagger.tags = ['Auth']
	 * #swagger.path = '/api/v1/auth/login'
	 * #swagger.description = 'Login pengguna dan buat sesi/token.'
	 * #swagger.summary = 'Login pengguna dan buat sesi/token.'
	 * #swagger.method = 'post'
	 * #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/UserLogin' } }
	 */
);

router.post(
	"/register",
	// validasiRegister,
	register,
	/**
	 * #swagger
	 * #swagger.tags = ['Auth']
	 * #swagger.path = '/api/v1/auth/register'
	 * #swagger.description = 'Daftar pengguna baru.'
	 * #swagger.summary = 'Daftar pengguna baru.'
	 * #swagger.method = 'post'
	 * #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/UserRegister' } }
	 */
);

router.post(
	"/forgot-password",
	// validasiForgotPassword,
	forgotPassword,
	/**
	 * #swagger
	 * #swagger.tags = ['Auth']
	 * #swagger.path = '/api/v1/auth/forgot-password'
	 * #swagger.description = 'Meminta link reset password melalui email.'
	 * #swagger.summary = 'Meminta link reset password melalui email.'
	 * #swagger.method = 'post'
	 * #swagger.parameters['body'] = { in: 'body',description: 'Email pengguna.', required: true, schema:{email: 'user@example.com'} }
	 */
);

router.post(
	"/reset-password",
	// validasiResetPassword,
	resetPassword,
	/**
	 * #swagger
	 * #swagger.tags = ['Auth']
	 * #swagger.path = '/api/v1/auth/reset-password'
	 * #swagger.description = 'Reset password menggunakan token, token didapatkan setelah verifikasi melalui email.'
	 * #swagger.summary = 'Reset password menggunakan token, token didapatkan setelah verifikasi melalui email.'
	 * #swagger.method = 'post'
	 * #swagger.parameters['token'] = { in: 'query', description: 'Reset Token dari email.' }
	 * #swagger.parameters['body'] = { in: 'body',description: 'Password Baru.', required: true, schema:{password: ''} }
	 */
);

// UNTUK LOGOUT
router.post(
	"/clear-session",
	(req, res) => {
		req.session.destroy((err) => {
			if (err) {
				console.error("Failed to destroy session during logout", err);
				return res.status(500).json({ message: "Logout failed" });
			}
			res.clearCookie("connect.sid");
			res.status(200).json({ message: "Logged out successfully" });
		});
	},
	/**
	 * #swagger
	 * #swagger.tags = ['Auth']
	 * #swagger.path = '/api/v1/auth/clear-session'
	 * #swagger.description = 'Menghapus sesi pengguna (Logout).'
	 * #swagger.summary = 'Menghapus sesi pengguna (Logout).'
	 * #swagger.method = 'post'
	 * #swagger.responses[200] = { description: 'Logged out successfully' }
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
);

export default router;
