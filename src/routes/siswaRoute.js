import express from "express";
import {
	// CRUD DASAR SISWA
	buatSiswaBaru,
	lihatSemuaSiswa,
	lihatSingleSiswa,
	editSiswa,
	hapusSiswa,

	// Data Akademik Siswa
	lihatNilaiSiswa,
	lihatPrestasiSiswaSpesifik,
	lihatRiwayatKenaikanKelas,

	// Utilitas Akun
	linkUserToSiswa,
	unlinkUserFromSiswa,

	// Pencarian
	cariSiswaByKeyword,
} from "../controllers/siswaController.js";
// Import validator sesuai kebutuhan
// import { validasiSiswaBaru, validasiEditSiswa } from "../validators/siswaValidator.js";

const router = express.Router();

// ==================================================================
// 1. MANAJEMEN DATA DASAR SISWA (CRUD)
// ==================================================================
router.get(
	"/",
	lihatSemuaSiswa
	/**
	 * #swagger
	 * #swagger.tags = ['Siswa']
	 * #swagger.path = '/api/v1/siswa/'
	 * #swagger.description = 'Ambil semua siswa (Mendukung filter query params)'
	 * #swagger.summary = 'Ambil semua siswa (Mendukung filter query params)'
	 * #swagger.method = 'get'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Ambil semua siswa (Mendukung filter query params)
router.get(
	"/:id",
	lihatSingleSiswa
	/**
	 * #swagger
	 * #swagger.tags = ['Siswa']
	 * #swagger.path = '/api/v1/siswa/{:id}'
	 * #swagger.description = 'Ambil detail siswa tunggal'
	 * #swagger.summary = 'Ambil detail siswa tunggal'
	 * #swagger.method = 'get'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Ambil detail siswa tunggal

router.post(
	"/add",
	/* validasiSiswaBaru, */ buatSiswaBaru
	/**
	 * #swagger
	 * #swagger.tags = ['Siswa']
	 * #swagger.path = '/api/v1/siswa/add'
	 * #swagger.description = 'Buat data siswa baru, Pendaftaran siswa'
	 * #swagger.summary = 'Buat data siswa baru, Pendaftaran siswa'
	 * #swagger.method = 'post'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Buat data siswa baru, Pendaftaran siswa

router.put(
	"/edit/:id",
	/* validasiEditSiswaPut, */ editSiswa
	/**
	 * #swagger
	 * #swagger.tags = ['Siswa']
	 * #swagger.path = '/api/v1/siswa/edit/{:id}'
	 * #swagger.description = 'Update data siswa (PUT: full update)'
	 * #swagger.summary = 'Update data siswa (PUT: full update)'
	 * #swagger.method = 'put'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Update data siswa (PUT: full update)

router.patch(
	"/edit/:id",
	/* validasiEditSiswaPatch, */ editSiswa
	/**
	 * #swagger
	 * #swagger.tags = ['Siswa']
	 * #swagger.path = '/api/v1/siswa/edit/{:id}'
	 * #swagger.description = 'Update data siswa (PATCH: parsial)'
	 * #swagger.summary = 'Update data siswa (PATCH: parsial)'
	 * #swagger.method = 'patch'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Update data siswa (PATCH: parsial)

router.delete(
	"/delete/:id",
	hapusSiswa
	/**
	 * #swagger
	 * #swagger.tags = ['Siswa']
	 * #swagger.path = '/api/v1/siswa/delete/{:id}'
	 * #swagger.description = 'Hapus data siswa'
	 * #swagger.summary = 'Hapus data siswa'
	 * #swagger.method = 'delete'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Hapus data siswa

// ==================================================================
// 2. PENCARIAN & FILTER KHUSUS (Lebih spesifik)
// ==================================================================
// GET /api/siswa/search?keyword=NamaAtauNIS
router.get(
	"/search",
	cariSiswaByKeyword
	/**
	 * #swagger
	 * #swagger.tags = ['Siswa']
	 * #swagger.path = '/api/v1/siswa/search'
	 * #swagger.description = 'Cari siswa berdasarkan keyword (Nama, NIS, NISN), pakai query'
	 * #swagger.summary = 'Cari siswa berdasarkan keyword (Nama, NIS, NISN), pakai query'
	 * #swagger.method = 'get'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Cari siswa berdasarkan keyword (Nama, NIS, NISN), pakai query

router.get(
	"/jenjang/:jenjang_id",
	lihatSemuaSiswa
	/**
	 * #swagger
	 * #swagger.tags = ['Siswa']
	 * #swagger.path = '/api/v1/siswa/jenjang/{:jenjang_id}'
	 * #swagger.description = 'Ambil siswa per jenjang'
	 * #swagger.summary = 'Ambil siswa per jenjang'
	 * #swagger.method = 'get'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Ambil siswa per jenjang

router.get(
	"/kelas/:kelas_id",
	lihatSemuaSiswa
	/**
	 * #swagger
	 * #swagger.tags = ['Siswa']
	 * #swagger.path = '/api/v1/siswa/kelas/{:kelas_id}'
	 * #swagger.description = 'Ambil siswa per kelas'
	 * #swagger.summary = 'Ambil siswa per kelas'
	 * #swagger.method = 'get'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Ambil siswa per kelas

// ==================================================================
// 3. DATA AKADEMIK & RIWAYAT SISWA (Relational Data)
// ==================================================================
router.get(
	"/:id/nilai",
	lihatNilaiSiswa
	/**
	 * #swagger
	 * #swagger.tags = ['Siswa']
	 * #swagger.path = '/api/v1/siswa/{:id}/nilai'
	 * #swagger.description = 'Lihat riwayat nilai siswa'
	 * #swagger.summary = 'Lihat riwayat nilai siswa'
	 * #swagger.method = 'get'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Lihat riwayat nilai siswa

router.get(
	"/:id/kenaikan-kelas",
	lihatRiwayatKenaikanKelas
	/**
	 * #swagger
	 * #swagger.tags = ['Siswa']
	 * #swagger.path = '/api/v1/siswa/kenaikan-kelas'
	 * #swagger.description = 'Lihat riwayat kenaikan/perpindahan kelas'
	 * #swagger.summary = 'Lihat riwayat kenaikan/perpindahan kelas'
	 * #swagger.method = 'get'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Lihat riwayat kenaikan/perpindahan kelas

router.get(
	"/:id/prestasi",
	lihatPrestasiSiswaSpesifik
	/**
	 * #swagger
	 * #swagger.tags = ['Siswa']
	 * #swagger.path = '/api/v1/siswa/{:id}/prestasi'
	 * #swagger.description = 'Lihat semua prestasi siswa'
	 * #swagger.summary = 'Lihat semua prestasi siswa'
	 * #swagger.method = 'get'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Lihat semua prestasi siswa

// ==================================================================
// 4. MANAJEMEN AKUN (Relasi ke Model Siswa)
// ==================================================================
router.post(
	"/:id/link-user/:user_id",
	linkUserToSiswa
	/**
	 * #swagger
	 * #swagger.tags = ['Siswa']
	 * #swagger.path = '/api/v1/siswa/{:id}/link-user/{:user_id}'
	 * #swagger.description = 'Hubungkan data siswa dengan akun user'
	 * #swagger.summary = 'Hubungkan data siswa dengan akun user'
	 * #swagger.method = 'post'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Hubungkan data siswa dengan akun user

router.delete(
	"/:id/unlink-user",
	unlinkUserFromSiswa
	/**
	 * #swagger
	 * #swagger.tags = ['Siswa']
	 * #swagger.path = '/api/v1/siswa/{:id}/unlink-user'
	 * #swagger.description = 'Putus relasi user dari siswa'
	 * #swagger.summary = 'Putus relasi user dari siswa'
	 * #swagger.method = 'delete'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Putus relasi user dari siswa

export default router;
