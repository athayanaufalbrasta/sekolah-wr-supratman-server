import { body, param } from "express-validator";
import { checkValidationResult } from "../utils/validationUtils";

export const validasiGetBerita = [
	param("id")
		.isInt({ min: 1 })
		.withMessage("ID Berita harus berupa angka integer positif.")
		.toInt(),
	checkValidationResult,
];

export const validasiBuatBerita = [
	body("judul")
		.notEmpty()
		.withMessage("Judul berita wajib diisi.")
		.isString()
		.withMessage("Judul harus berupa teks.")
		.isLength({ min: 5 })
		.withMessage("Judul minimal 5 karakter."),

	body("ringkasan").optional().isString().withMessage("Ringkasan harus berupa teks."),

	body("konten_lengkap")
		.notEmpty()
		.withMessage("Isi konten lengkap wajib diisi.")
		.isLength({ min: 50 })
		.withMessage("Konten minimal 50 karakter."),

	body("kategori_id")
		.isInt({ min: 0 })
		.withMessage("Kategori ID harus berupa angka integer positif.")
		.toInt(),

	body("gambar_utama").optional().isString().withMessage("Path gambar utama harus berupa teks."),

	body("tanggal_publikasi")
		.notEmpty()
		.withMessage("Tanggal publikasi wajib diisi.")
		.isISO8601()
		.toDate()
		.withMessage("Tanggal publikasi harus dalam format tanggal/waktu yang valid (ISO 8601)."),

	body("penulis_user_id")
		.notEmpty()
		.withMessage("ID Penulis wajib diisi.")
		.isInt({ min: 1 })
		.withMessage("ID Penulis harus berupa integer positif.")
		.toInt(),

	body("editor_user_id")
		.optional()
		.isInt({ min: 1 })
		.withMessage("ID Editor harus berupa integer positif.")
		.toInt(),

	checkValidationResult,
];

export const validasiPutBerita = [
	param("id")
		.exists()
		.withMessage("ID Berita wajib disertakan di parameter.")
		.isInt({ min: 1 })
		.withMessage("ID Berita harus berupa angka integer positif.")
		.toInt(),

	body("judul")
		.notEmpty()
		.withMessage("Judul wajib diisi.")
		.isString()
		.withMessage("Judul harus berupa teks.")
		.isLength({ min: 5, max: 255 })
		.withMessage("Judul minimal 5 karakter dan maksimal 255 karakter."),

	body("slug")
		.notEmpty()
		.withMessage("Slug wajib diisi.")
		.isString()
		.withMessage("Slug harus berupa teks.")
		.isLength({ max: 255 })
		.withMessage("Slug maksimal 255 karakter."),

	body("konten_lengkap")
		.notEmpty()
		.withMessage("Isi konten lengkap wajib diisi.")
		.isString()
		.withMessage("Konten harus berupa teks.")
		.isLength({ min: 50 })
		.withMessage("Konten minimal 50 karakter."),

	body("tanggal_publikasi")
		.notEmpty()
		.withMessage("Tanggal publikasi wajib diisi.")
		.isISO8601()
		.toDate()
		.withMessage("Tanggal publikasi harus dalam format tanggal/waktu yang valid (ISO 8601)."),

	body("penulis_user_id")
		.notEmpty()
		.withMessage("ID Penulis wajib diisi.")
		.isInt({ min: 1 })
		.withMessage("ID Penulis harus berupa integer positif.")
		.toInt(),

	body("kategori_id")
		.optional({ nullable: true })
		.isInt({ min: 1 })
		.withMessage("Kategori ID harus berupa integer positif.")
		.toInt(),

	body("ringkasan")
		.optional({ nullable: true })
		.isString()
		.withMessage("Ringkasan harus berupa teks."),

	body("gambar_utama")
		.optional({ nullable: true })
		.isString()
		.withMessage("URL Gambar Utama harus berupa teks."),

	body("tags")
		.optional({ nullable: true })
		.isString()
		.withMessage("Tags harus berupa teks string."),

	body("is_published")
		.optional()
		.isBoolean()
		.withMessage("is_published harus berupa boolean (true/false)"),

	body("is_featured")
		.optional()
		.isBoolean()
		.withMessage("is_featured harus berupa boolean (true/false)"),

	body("editor_user_id")
		.optional({ nullable: true })
		.isInt({ min: 1 })
		.withMessage("ID Editor harus berupa integer positif.")
		.toInt(),
	checkValidationResult,
];

export const validasiPatchBerita = [
	param("id")
		.exists()
		.withMessage("ID Berita wajib disertakan di parameter.")
		.isInt({ min: 1 })
		.withMessage("ID Berita harus berupa angka integer positif.")
		.toInt(),

	body("judul")
		.optional({ checkFalsy: true })
		.isString()
		.withMessage("Judul harus berupa teks.")
		.isLength({ min: 5, max: 255 })
		.withMessage("Judul minimal 5 karakter dan maksimal 255 karakter."),

	body("slug")
		.optional({ checkFalsy: true })
		.isString()
		.withMessage("Slug harus berupa teks.")
		.isLength({ max: 255 })
		.withMessage("Slug maksimal 255 karakter."),

	body("konten_lengkap")
		.optional({ checkFalsy: true })
		.isString()
		.withMessage("Konten harus berupa teks.")
		.isLength({ min: 50 })
		.withMessage("Konten minimal 50 karakter."),

	body("tanggal_publikasi")
		.optional({ checkFalsy: true })
		.isISO8601()
		.toDate()
		.withMessage("Tanggal publikasi harus dalam format tanggal/waktu yang valid (ISO 8601)."),

	body("penulis_user_id")
		.optional({ checkFalsy: true })
		.isInt({ min: 1 })
		.withMessage("ID Penulis harus berupa integer positif.")
		.toInt(),

	body("kategori_id")
		.optional({ nullable: true })
		.isInt({ min: 1 })
		.withMessage("Kategori ID harus berupa integer positif.")
		.toInt(),

	body("ringkasan")
		.optional({ nullable: true })
		.isString()
		.withMessage("Ringkasan harus berupa teks."),

	body("gambar_utama")
		.optional({ nullable: true })
		.isString()
		.withMessage("URL Gambar Utama harus berupa teks."),

	body("tags")
		.optional({ nullable: true })
		.isString()
		.withMessage("Tags harus berupa teks string."),

	body("is_published")
		.optional()
		.isBoolean()
		.withMessage("is_published harus berupa boolean (true/false)"),

	body("is_featured")
		.optional()
		.isBoolean()
		.withMessage("is_featured harus berupa boolean (true/false)"),

	body("editor_user_id")
		.optional({ nullable: true })
		.isInt({ min: 1 })
		.withMessage("ID Editor harus berupa integer positif.")
		.toInt(),

	checkValidationResult,
];

export const validasiHapusBerita = [
	param("id")
		.isInt({ min: 1 })
		.withMessage("ID yang dihapus harus berupa angka integer positif.")
		.toInt(),
	checkValidationResult,
];
