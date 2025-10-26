import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const checkValidationResult = (req: Request, res: Response, next: NextFunction) => {
	// 1. Kumpulkan hasil dari semua aturan body(), query(), atau param() sebelumnya
	const errors = validationResult(req);

	// 2. Cek apakah ada error
	if (!errors.isEmpty()) {
		// Jika ada error, kirim respons HTTP 400 Bad Request
		return res.status(400).json({
			success: false,
			message: "Validasi data gagal.",
			errors: errors.array(), // Kirim array berisi detail error
		});
	}

	// 3. Jika tidak ada error, lanjutkan ke middleware/controller berikutnya
	next();
};
