import swaggerAutogen from "swagger-autogen";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "../../");

const doc = {
	info: {
		title: "WR Supratman API 1.0",
		description: `Dokumentasi API untuk website Perguruan WR Supratman Medan`,
	},
	host: process.env.VERCEL_ENV === "production" ? process.env.VERCEL_URL : "localhost:3000",
	basePath: "/",
	schemes: [process.env.VERCEL_ENV === "production" ? "https" : "http"],
	consumes: ["application/json"],
	produces: ["application/json"],
	tags: [
		{ name: "Auth", description: "Endpoint untuk otentikasi User (Login, Register, Token)" },
		{ name: "Users", description: "Endpoint untuk pengelolaan data User (Guru, Staf, Admin)" },
		{ name: "Siswa", description: "Endpoint untuk pengelolaan data Siswa" },
		{ name: "Berita", description: "Endpoint untuk pengelolaan Berita" },
		{ name: "Kegiatan", description: "Endpoint untuk pengelolaan Kegiatan" },
		{ name: "Pengumuman", description: "Endpoint untuk pengelolaan Pengumuman" },
		// {
		// 	name: "Konten Web",
		// 	description: "Endpoint untuk pengelolaan Web komponen (About, Kontak, dll)",
		// },
		{
			name: "Galleries",
			description: "Endpoint untuk pengelolaan Galeri(CRUD dari table GALLERIES)",
		},
	],
	securityDefinitions: {
		BearerAuth: {
			type: "apiKey",
			name: "Authorization",
			in: "header",
			description: "Masukkan token JWT dengan format: Bearer <token>",
		},
	},
	definitions: {
		// =================================================================
		// AUTH & USER
		// =================================================================
		UserLogin: {
			$email: "",
			$password: "",
		},
		UserRegister: {
			$username: "",
			$email: "",
			$password: "",
			$nama_lengkap: "",
			role_id: 0,
		},
		// UserUpdate: {
		// 	// Untuk PATCH (hanya field yang diubah)
		// 	type: "object",
		// 	properties: {
		// 		username: { type: "string", example: "john_update" },
		// 		nama_lengkap: { type: "string", example: "John A. Doe Updated" },
		// 		jabatan: { type: "string", example: "Kepala Sekolah" },
		// 		nomor_telefon: { type: "string", example: "081234567890" },
		// 		is_aktif: { type: "boolean", example: true },
		// 	},
		// },

		// =================================================================
		// BERITA
		// =================================================================
		Berita: {
			// POST (Create)
			$judul: "",
			ringkasan: "",
			$konten_lengkap: "",
			kategori_id: 0,
			gambar_utama: "",
			tanggal_publikasi: "",
			$penulis_user_id: 0,
			tags: "",
			is_published: true,
			is_featured: true,
		},
		BeritaUpdate: {
			// PATCH (Update Sebagian)
			$judul: "",
			ringkasan: "",
			$konten_lengkap: "",
			kategori_id: 0,
			tanggal_publikasi: "",
			is_published: true,
			$editor_user_id: 0,
		},
		BeritaReplace: {
			// PUT (Ganti Lengkap - Tanpa File Gambar)
			$judul: "string",
			ringkasan: "string",
			$konten_lengkap: "string",
			kategori_id: 0,
			tanggal_publikasi: "string",
			$penulis_user_id: 0,
			tags: "string",
			is_published: true,
			is_featured: true,
		},

		// =================================================================
		// KEGIATAN
		// =================================================================
		Kegiatan: {
			// POST (Create)
			$judul: "",
			$tanggal_mulai: "",
			$tanggal_selesai: "",
			$lokasi: "",
			$deskripsi: "",
			kategori_id: 0,
			gambar_utama: "",
			$penulis_user_id: 0,
			is_featured: true,
		},
		KegiatanUpdate: {
			// PATCH (Update Sebagian)
			lokasi: "",
			status: "",
			deskripsi: "",
			is_featured: true,
		},
		KegiatanReplace: {
			// PUT (Ganti Lengkap - Tanpa File Gambar)
			$judul: "",
			$tanggal_mulai: "",
			$tanggal_selesai: "",
			$lokasi: "",
			$deskripsi: "",
			kategori_id: 0,
			$penulis_user_id: 0,
			is_featured: true,
		},

		// =================================================================
		// PENGUMUMAN
		// =================================================================
		Pengumuman: {
			// POST (Create)
			$judul: "",
			$pesan_singkat: "",
			$konten_lengkap: "",
			tanggal_penting: "",
			is_sticky: true,
			masa_berlaku_sampai: "",
			audiens_jenjang_id: 0,
			$penulis_user_id: 0,
		},
		PengumumanUpdate: {
			// PATCH (Update Sebagian)
			pesan_singkat: "",
			konten_lengkap: "",
			is_sticky: true,
			masa_berlaku_sampai: "",
		},
		PengumumanReplace: {
			// PUT (Ganti Lengkap)
			$judul: "",
			$pesan_singkat: "",
			$konten_lengkap: "",
			tanggal_penting: "",
			is_sticky: true,
			masa_berlaku_sampai: "",
			audiens_jenjang_id: 0,
			$penulis_user_id: 0,
		},

		// =================================================================
		// GALLERIES
		// =================================================================
		Galleries: {
			$pic_id: 0,
			$path_file: "",
			caption: "",
		},
		GalleriesReplace: {
			$path_file: "",
			caption: "",
		},
		GalleriesUpdate: {
			caption: "",
		},
		// // =================================================================
		// // SISWA
		// // =================================================================
		// Siswa: {
		// 	// POST (Create)
		// 	type: "object",
		// 	properties: {
		// 		nis: { type: "string", example: "20250001" },
		// 		nisn: { type: "string", example: "0001234567" },
		// 		jenis_kelamin: { type: "string", enum: ["Laki-Laki", "Perempuan"], example: "Laki-Laki" },
		// 		nama_lengkap: { type: "string", example: "Budi Santoso" },
		// 		jenjang_id: { type: "integer", example: 2, description: "ID Jenjang (e.g., SMP)" },
		// 		tgl_lahir: { type: "string", format: "date", example: "2008-05-15" },
		// 		alamat: { type: "string", example: "Jl. Mawar No. 12, Medan" },
		// 		nama_ayah: { type: "string", example: "Ahmad Santoso" },
		// 		nama_ibu: { type: "string", example: "Siti Rahayu" },
		// 	},
		// 	required: ["nis", "nama_lengkap", "jenjang_id"],
		// },
		// SiswaUpdate: {
		// 	// PATCH (Update Sebagian)
		// 	type: "object",
		// 	properties: {
		// 		alamat: { type: "string", example: "Jl. Baru No. 5, Medan" },
		// 		nama_ibu: { type: "string", example: "Siti Rahayu (Update)" },
		// 		nisn: { type: "string", example: "0001234567" },
		// 	},
		// },
		// SiswaReplace: {
		// 	// PUT (Ganti Lengkap)
		// 	type: "object",
		// 	properties: {
		// 		nis: { type: "string", example: "20250001" },
		// 		nisn: { type: "string", example: "0001234567" },
		// 		jenis_kelamin: { type: "string", enum: ["Laki-Laki", "Perempuan"], example: "Laki-Laki" },
		// 		nama_lengkap: { type: "string", example: "Budi Santoso" },
		// 		jenjang_id: { type: "integer", example: 2, description: "ID Jenjang (e.g., SMP)" },
		// 		tgl_lahir: { type: "string", format: "date", example: "2008-05-15" },
		// 		alamat: { type: "string", example: "Jl. Mawar No. 12, Medan" },
		// 		nama_ayah: { type: "string", example: "Ahmad Santoso" },
		// 		nama_ibu: { type: "string", example: "Siti Rahayu" },
		// 	},
		// 	required: ["nis", "nama_lengkap", "jenjang_id"],
		// },

		// // =================================================================
		// // KONTEN WEB (Berdasarkan model 'konten_web')
		// // =================================================================
		// KontenWeb: {
		// 	// POST/PUT (Hanya satu skema karena datanya fleksibel)
		// 	type: "object",
		// 	properties: {
		// 		konten_key: { type: "string", example: "menu_footer", description: "Kunci unik konten (e.g., 'galeri_foto')" },
		// 		konten_value: {
		// 			type: "object",
		// 			example: [
		// 				{ link: "/about", label: "Tentang Kami" },
		// 				{ link: "/contact", label: "Kontak" },
		// 			],
		// 			description: "Data konten dalam format JSON (bisa array objek atau array string).",
		// 		},
		// 	},
		// 	required: ["konten_key", "konten_value"],
		// },
	},
};

const outputFile = "./swagger-output.json";
const endpointsFiles = [
	path.join(projectRoot, "index.js"),
	path.join(projectRoot, "src/routes/beritaRoute.js"),
	path.join(projectRoot, "src/routes/kegiatanRoute.js"),
	path.join(projectRoot, "src/routes/pengumumanRoute.js"),
	path.join(projectRoot, "src/routes/authRoute.js"),
	path.join(projectRoot, "src/routes/userRoute.js"),
	path.join(projectRoot, "src/routes/siswaRoute.js"),
	path.join(projectRoot, "src/routes/kontenWebRoute.js"),
	path.join(projectRoot, "src/routes/fileUploadRoute.js"),
];

swaggerAutogen(outputFile, endpointsFiles, doc);
