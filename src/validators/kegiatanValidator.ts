import { body, param } from "express-validator";

export const validasiBuatKegiatan = [
	// Nama Kegiatan: Wajib diisi, string, minimal 5 karakter
	body("nama_kegiatan")
		.notEmpty()
		.withMessage("Nama kegiatan wajib diisi.")
		.isString()
		.withMessage("Nama kegiatan harus berupa teks.")
		.isLength({ min: 5 })
		.withMessage("Nama kegiatan minimal 5 karakter."),

	// Tanggal Mulai: Wajib diisi, harus valid date time
	body("tanggal_mulai")
		.notEmpty()
		.withMessage("Tanggal mulai wajib diisi.")
		.isISO8601()
		.toDate()
		.withMessage("Format tanggal mulai tidak valid (gunakan format ISO 8601)."),

	// Tanggal Selesai: Opsional (karena di Prisma nullable), jika ada, harus valid date time
	body("tanggal_selesai")
		.optional()
		.isISO8601()
		.toDate()
		.withMessage("Format tanggal selesai tidak valid (gunakan format ISO 8601)."),

	// Lokasi: Wajib diisi dan minimal 3 karakter
	body("lokasi")
		.notEmpty()
		.withMessage("Lokasi wajib diisi.")
		.isString()
		.withMessage("Lokasi harus berupa teks.")
		.isLength({ min: 3 })
		.withMessage("Lokasi minimal 3 karakter."),

	// Kategori ID (FK): Wajib diisi, integer, dan positif
	body("kategori_id")
		.isInt({ min: 1 })
		.withMessage("Kategori ID harus berupa angka integer positif.")
		.toInt(),

	// Deskripsi: Opsional (nullable), jika ada, harus string
	body("deskripsi").optional().isString().withMessage("Deskripsi harus berupa teks."),

	// Gambar Utama: Opsional, jika ada, harus string (asumsi ini adalah URL/Path)
	body("gambar_utama").optional().isString().withMessage("Path gambar utama harus berupa teks."),
];

// Validasi untuk mengedit kegiatan (PUT/PATCH)
export const validasiEditKegiatan = [
	// ID Kegiatan (dari body atau params): Wajib ada dan harus integer positif
	body("kegiatan_id")
		.isInt({ min: 1 })
		.withMessage("ID Kegiatan harus berupa angka integer positif.")
		.toInt(),

	// Nama Kegiatan: Opsional, jika ada, harus minimal 5 karakter
	body("nama_kegiatan")
		.optional()
		.isString()
		.withMessage("Nama kegiatan harus berupa teks.")
		.isLength({ min: 5 })
		.withMessage("Nama kegiatan minimal 5 karakter."),

	// Tanggal Mulai: Opsional, jika ada, harus valid date time
	body("tanggal_mulai")
		.optional()
		.isISO8601()
		.toDate()
		.withMessage("Format tanggal mulai tidak valid (gunakan format ISO 8601)."),

	// Status: Opsional, jika ada, harus sesuai dengan nilai ENUM yang diizinkan
	// Nilai harus sesuai dengan ENUM di Prisma: Akan_Datang, Berlangsung, Selesai, Dibatalkan
	body("status")
		.optional()
		.isIn(["Akan Datang", "Berlangsung", "Selesai", "Dibatalkan"])
		.withMessage("Status kegiatan tidak valid."),

	// Lokasi: Opsional, jika ada, minimal 3 karakter
	body("lokasi")
		.optional()
		.isString()
		.withMessage("Lokasi harus berupa teks.")
		.isLength({ min: 3 })
		.withMessage("Lokasi minimal 3 karakter."),

	// Kategori ID: Opsional, jika ada, harus integer positif
	body("kategori_id")
		.optional()
		.isInt({ min: 1 })
		.withMessage("Kategori ID harus berupa angka integer positif.")
		.toInt(),
];

// Validasi untuk menghapus kegiatan (DELETE /kegiatan/:id)
export const validasiHapusKegiatan = [
	param("id")
		.isInt({ min: 1 })
		.withMessage("ID Kegiatan yang dihapus harus berupa angka integer positif.")
		.toInt(),
];
