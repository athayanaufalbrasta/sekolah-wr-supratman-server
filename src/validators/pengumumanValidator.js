import { body } from "express-validator";

export const validasiBuatPengumuman = [
	// Judul: Wajib diisi, string, minimal 5 karakter
	body("judul")
		.notEmpty()
		.withMessage("Judul pengumuman wajib diisi.")
		.isString()
		.withMessage("Judul harus berupa teks.")
		.isLength({ min: 5 })
		.withMessage("Judul minimal 5 karakter."),

	// Pesan Singkat: Wajib diisi dan minimal 10 karakter (karena ini inti pengumuman)
	body("pesan_singkat")
		.notEmpty()
		.withMessage("Pesan singkat wajib diisi.")
		.isString()
		.withMessage("Pesan harus berupa teks.")
		.isLength({ min: 10 })
		.withMessage("Pesan minimal 10 karakter."),

	// Tanggal Penting: Opsional, jika diisi harus format tanggal (Date) yang valid
	body("tanggal_penting").optional().isISO8601().toDate().withMessage("Format tanggal penting tidak valid (gunakan format ISO 8601 YYYY-MM-DD)."),

	// Masa Berlaku Sampai: Opsional (kapan kadaluarsa), jika diisi harus format DateTime yang valid
	body("masa_berlaku_sampai").optional().isISO8601().toDate().withMessage("Format masa berlaku tidak valid (gunakan format ISO 8601)."),

	// is_sticky: Opsional, jika ada, harus boolean
	body("is_sticky").optional().isBoolean().withMessage("Status 'Is Sticky' harus berupa boolean (true/false).").toBoolean(), // Konversi string "true" atau "false" ke tipe boolean

	// audiens_jenjang_id: Opsional, jika ada, harus integer positif
	body("audiens_jenjang_id").optional().isInt({ min: 1 }).withMessage("Audiens Jenjang ID harus berupa angka integer positif.").toInt(),
];

import { body } from "express-validator";

export const validasiEditPengumuman = [
	// ID Pengumuman: Wajib ada di body (atau params) dan harus integer positif
	body("pengumuman_id").isInt({ min: 1 }).withMessage("ID Pengumuman harus berupa angka integer positif.").toInt(),

	// Judul: Opsional, jika ada, minimal 5 karakter
	body("judul").optional().isString().withMessage("Judul harus berupa teks.").isLength({ min: 5 }).withMessage("Judul minimal 5 karakter."),

	// Pesan Singkat: Opsional, jika ada, minimal 10 karakter
	body("pesan_singkat").optional().isString().withMessage("Pesan singkat harus berupa teks.").isLength({ min: 10 }).withMessage("Pesan minimal 10 karakter."),

	// Masa Berlaku Sampai: Opsional, jika ada, harus valid DateTime
	body("masa_berlaku_sampai").optional().isISO8601().toDate().withMessage("Format masa berlaku tidak valid (gunakan format ISO 8601)."),

	// is_sticky: Opsional, jika ada, harus boolean
	body("is_sticky").optional().isBoolean().withMessage("Status 'Is Sticky' harus berupa boolean.").toBoolean(),

	// audiens_jenjang_id: Opsional, jika ada, harus integer positif
	body("audiens_jenjang_id").optional().isInt({ min: 1 }).withMessage("Audiens Jenjang ID harus berupa angka integer positif.").toInt(),
];

import { param } from "express-validator";

export const validasiHapusPengumuman = [
	// Cek ID yang ada di URL (req.params.id)
	param("id").isInt({ min: 1 }).withMessage("ID Pengumuman yang dihapus harus berupa angka integer positif.").toInt(),
];
