import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateSecureRandomInt4 } from "../utils/generateUUID.js";
import { sendEmailVerification } from "../middlewares/mailing_service.js";

const JWT_SECRET = process.env.JWT_SECRET;
const RESET_SECRET = process.env.RESET_SECRET;

const login = async ({ email, password }) => {
	try {
		const user = await db.users.findUniqueOrThrow({ where: { email }, include: { role: true } });

		const isPasswordValid = await bcrypt.compare(password, user.password_hash);
		if (!isPasswordValid) throw new Error("Username atau password salah.");

		const accessToken = jwt.sign({ user_id: user.user_id, email: user.email, role_id: user.role_id }, JWT_SECRET, { expiresIn: "15m" });

		return {
			token: {
				apiKey: accessToken,
				crt: jwt.decode(accessToken).iat,
				exp: jwt.decode(accessToken).exp,
			},
			userInfo: { user_id: user.user_id, username: user.username, role: user.role.nama_role },
		};
	} catch (error) {
		throw error;
	}
};

const register = async (data) => {
	try {
		const hashedPassword = await bcrypt.hash(data.password, 10);
		const UUID = generateSecureRandomInt4();

		const newUser = await db.users.create({
			data: {
				user_id: UUID,
				username: data.username,
				email: data.email,
				nama_lengkap: data.nama_lengkap,
				password_hash: hashedPassword,
				role_id: data.role_id,
			},
			select: { user_id: true, username: true, email: true, nama_lengkap: true },
		});

		return newUser;
	} catch (error) {
		// P2002 adalah error unik constraint dari Prisma (misal: email/username sudah terdaftar)
		console.log(error);
		throw error;
	}
};

const forgotPassword = async (email, res) => {
	try {
		const user = await db.users.findUnique({ where: { email: email } });
		if (!user) {
			console.log(`Email ${email} tidak ditemukan.`);
			return { message: "Email tidak ditemukan" };
		}
		const resetToken = jwt.sign({ user_id: user.user_id }, RESET_SECRET, { expiresIn: "10m" });
		await sendEmailVerification(email, resetToken, res);
		return { message: "Permintaan reset password telah dikirim ke email anda. Silahkan cek pesan email masuk anda. " };
	} catch (error) {
		console.log(error);
	}
};

const resetPassword = async (token, newPassword) => {
	let decoded;
	try {
		decoded = jwt.verify(token, RESET_SECRET);
	} catch (err) {
		throw new Error("Token reset tidak valid atau sudah kadaluarsa.");
	}

	const newHashedPassword = await bcrypt.hash(newPassword, 10);
	const updatedUser = await db.users.update({
		where: { user_id: decoded.user_id },
		data: { password_hash: newHashedPassword },
		select: { user_id: true, email: true },
	});

	if (!updatedUser) {
		throw new Error("Gagal mengupdate password.");
	}
	return { message: "Password berhasil direset.", user: updatedUser };
};

const refreshAccessToken = async (refreshToken) => {
	let decoded;
	try {
		decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
	} catch (err) {
		throw new Error("Refresh Token tidak valid atau kadaluarsa.");
	}

	const newPayload = {
		user_id: decoded.user_id,
		role_id: decoded.role_id,
		role_name: decoded.role_name,
	};

	const newAccessToken = jwt.sign(newPayload, JWT_SECRET, { expiresIn: "1h" });
	return { accessToken: newAccessToken };
};

export default { login, register, forgotPassword, resetPassword, refreshAccessToken };
