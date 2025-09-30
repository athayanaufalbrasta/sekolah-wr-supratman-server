import { body, query } from "express-validator";
import { checkValidationResult } from "../utils/validationUtils.js";

export const validasiLogin = [
	body("username")
		.notEmpty()
		.withMessage("Username wajib diisi.")
		.isString()
		.withMessage("Username harus berupa teks.")
		.isLength({ min: 4 })
		.withMessage("Username minimal 4 karakter."),
	body("password").notEmpty().withMessage("Password wajib diisi.").isLength({ min: 6 }).withMessage("Password minimal 6 karakter."),
	checkValidationResult,
];

export const validasiRegister = [
	body("username").notEmpty().withMessage("Username wajib diisi.").isLength({ min: 4 }).withMessage("Username minimal 4 karakter."),
	body("email").notEmpty().withMessage("Email wajib diisi.").isEmail().withMessage("Format email tidak valid.").normalizeEmail(), // Membersihkan dan mengubah email menjadi huruf kecil
	body("password").notEmpty().withMessage("Password wajib diisi.").isLength({ min: 6 }).withMessage("Password minimal 6 karakter."),
	body("nama_lengkap").notEmpty().withMessage("Nama lengkap wajib diisi.").isString().withMessage("Nama lengkap harus berupa teks."),
	body("role_id").isInt({ min: 1 }).withMessage("Role ID harus berupa angka integer positif.").toInt(),
	checkValidationResult,
];

export const validasiForgotPassword = [
	body("email").notEmpty().withMessage("Email wajib diisi.").isEmail().withMessage("Format email tidak valid.").normalizeEmail(),
	checkValidationResult,
];

export const validasiResetPassword = [
	query("token").notEmpty().withMessage("Token reset wajib ada di URL."),
	body("password").notEmpty().withMessage("Password baru wajib diisi.").isLength({ min: 6 }).withMessage("Password baru minimal 6 karakter."),
	checkValidationResult,
];

export const validasiRefreshToken = [body("refreshToken").notEmpty().withMessage("Refresh Token wajib ada."), checkValidationResult];
