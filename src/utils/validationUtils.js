import { validationResult } from "express-validator";

/**
 * Middleware untuk mengecek hasil validasi dan mengirim response error
 * jika ada kesalahan input.
 * @param {import('express').Request} req - Objek Request Express
 * @param {import('express').Response} res - Objek Response Express
 * @param {import('express').NextFunction} next - Fungsi Next Express
 */
export const checkValidationResult = (req, res, next) => {
	// Ambil hasil validasi dari express-validator
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		// Jika ada error, kirim respons 400 Bad Request
		return res.status(400).json({
			success: false,
			message: "Input validation failed",
			errors: errors.array({ onlyFirstError: true }), // Hanya ambil error pertama per field
		});
	}

	// Jika tidak ada error, lanjut ke middleware atau controller berikutnya
	next();
};
