import { body, param } from "express-validator";

// Validasi untuk membuat berita baru (POST)
export const validasiBuatBerita = [
	body("judul")
		.notEmpty()
		.withMessage("Judul berita wajib diisi.")
		.isString()
		.withMessage("Judul harus berupa teks.")
		.isLength({ min: 5 })
		.withMessage("Judul minimal 5 karakter."),
	body("konten_lengkap").notEmpty().withMessage("Isi konten lengkap wajib diisi.").isLength({ min: 50 }).withMessage("Konten minimal 50 karakter."),
	body("kategori_id").isInt({ min: 1 }).withMessage("Kategori ID harus berupa angka integer positif.").toInt(), // Konversi ke integer untuk proses selanjutnya
	body("ringkasan").optional().isString().withMessage("Ringkasan harus berupa teks."),
];

// Validasi untuk mengedit berita (PUT/PATCH)
export const validasiEditBerita = [
	body("berita_id").isInt({ min: 1 }).withMessage("ID Berita harus berupa angka integer positif.").toInt(),
	body("judul")
		.notEmpty()
		.withMessage("Judul wajib diisi.")
		.isString()
		.withMessage("Judul harus berupa teks.")
		.isLength({ min: 5 })
		.withMessage("Judul minimal 5 karakter."),
	body("slug").notEmpty().withMessage("Slug wajib diisi.").isString().withMessage("Slug harus berupa teks."),
	body("konten_lengkap").notEmpty().withMessage("Isi konten lengkap wajib diisi.").isLength({ min: 50 }).withMessage("Konten minimal 50 karakter."),
	body("kategori_id").isInt({ min: 1 }).withMessage("Kategori ID harus berupa angka integer positif.").toInt(),
	body("ringkasan").optional().isString().withMessage("Ringkasan harus berupa teks."),
];

// Validasi untuk menghapus berita (DELETE /berita/:id)
export const validasiHapusBerita = [
	param("id").isInt({ min: 1 }).withMessage("ID yang dihapus harus berupa angka integer positif.").toInt(), // Konversi ke integer
];
