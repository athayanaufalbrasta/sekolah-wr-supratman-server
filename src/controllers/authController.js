import authService from "../services/authService.js";

export const login = async (req, res) => {
	try {
		const result = await authService.login(req.body);
		res.status(200).json({ message: "Login berhasil", data: result, loggedIn: result.userInfo.username });
	} catch (error) {
		const status = error.message.includes("salah") ? 401 : 500;
		res.status(status).json({ message: "Gagal Login", serverMessage: error.message });
	}
};

export const register = async (req, res) => {
	try {
		const newUser = await authService.register(req.body);
		res.status(201).json({ message: "Registrasi berhasil", data: newUser });
	} catch (error) {
		const status = error.message.includes("terdaftar") ? 409 : 500; // 409 Conflict
		res.status(status).json({ message: "Gagal Registrasi", serverMessage: error.message });
	}
};

export const forgotPassword = async (req, res) => {
	try {
		const { email } = req.body;
		const result = await authService.forgotPassword(email, res);
		res.status(202).json({
			message: result.message,
		});
	} catch (error) {
		res.status(500).json({ message: "Gagal memproses permintaan reset", serverMessage: error.message });
	}
};

export const resetPassword = async (req, res) => {
	try {
		const { token } = req.query;
		const { password } = req.body;
		const result = await authService.resetPassword(token, password);
		res.status(200).json({ message: result.message });
	} catch (error) {
		const status = error.message.includes("token") ? 400 : 500;
		res.status(status).json({ message: "Gagal mereset password", serverMessage: error.message });
	}
};
