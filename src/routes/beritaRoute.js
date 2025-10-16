import express from "express";
import {
	buatBerita,
	editBeritaLengkap,
	editBeritaSebagian,
	hapusBerita,
	ambilDetailBerita,
	ambilSemuaBerita,
	buatKategoriBerita,
	ambilBeritaBerdasarkanKategori,
	ambilSemuaKategoriBerita,
	editKategoriBerita,
	hapusKategoriBerita,
} from "../controllers/beritaController.js";
import authenticateJWT from "../middlewares/jwtVerification.js";
// import {
// 	validasiBuatBerita,
// 	validasiPutBerita,
// 	validasiPatchBerita,
// 	validasiHapusBerita,
// 	validasiGetBerita,
// } from "../validators/beritaValidator.js";
// import csrfProtection from "../middlewares/csrfProtection.js";

const router = express.Router();

// api/v1/berita
router.get(
	"/",
	ambilSemuaBerita
	/**
	 * #swagger
	 * #swagger.tags = ['Berita']
	 * #swagger.path = '/api/v1/berita/'
	 * #swagger.description = 'Melihat daftar semua Berita.'
	 * #swagger.summary = 'Melihat daftar semua Berita.'
	 * #swagger.security = [{ "BearerAuth": [] }]
	 * #swagger.method = 'get'
	 */
);

// api/v1/berita/single/:berita_id
router.get(
	"/single/:berita_id",
	// validasiGetBerita,
	ambilDetailBerita
	/**
	 * #swagger
	 * #swagger.tags = ['Berita']
	 * #swagger.path = '/api/v1/berita/single/{:id}'
	 * #swagger.description = 'Melihat detail Berita berdasarkan ID.'
	 * #swagger.summary = 'Melihat detail Berita berdasarkan ID.'
	 * #swagger.method = 'get'
	 * #swagger.parameters[':berita_id'] = { in: 'path', description: 'ID Berita.', required: true, type: 'string' }
	 */
);

// api/v1/berita/kategori
router.get(
	"/kategori",
	ambilSemuaKategoriBerita
	/**
	 * #swagger
	 * #swagger.tags = ['Berita']
	 * #swagger.path = '/api/v1/berita/kategori'
	 * #swagger.description = 'Ambil daftar semua Kategori Berita.'
	 * #swagger.summary = 'Ambil daftar semua Kategori Berita.'
	 * #swagger.method = 'get'
	 * #swagger.deprecated = false
	 */
);

// // api/v1/berita/kategori/:kategori_id
// router.get(
// 	"/kategori/:kategori_id",
// 	ambilBeritaBerdasarkanKategori
// 	/**
// 	 * #swagger
// 	 * #swagger.tags = ['Berita']
// 	 * #swagger.path = '/api/v1/berita/kategori/{:kategori_id}'
// 	 * #swagger.description = 'Ambil daftar semua Kategori Berita.'
// 	 * #swagger.summary = 'Ambil daftar semua Kategori Berita.'
// 	 * #swagger.method = 'get'
// 	 * #swagger.parameters[':kategori_id'] = { in: 'path', description: 'ID Kategori Berita.', required: true, type: 'string' }
// 	 * #swagger.deprecated = false
// 	 */
// );

// api/v1/berita/kategori/add
router.post(
	"/kategori/add",
	authenticateJWT,
	buatKategoriBerita
	/**
	 * #swagger
	 * #swagger.tags = ['Berita']
	 * #swagger.path = '/api/v1/berita/kategori/add'
	 * #swagger.description = 'Ambil daftar semua Kategori Berita.'
	 * #swagger.summary = 'Ambil daftar semua Kategori Berita.'
	 * #swagger.method = 'post'
	 * #swagger.parameters[':kategori_id'] = { in: 'path', description: 'ID Kategori Berita.', required: true, type: 'string' }
	 * #swagger.security = [{ "BearerAuth": [] }]
	 * #swagger.deprecated = true
	 */
);

// api/v1/berita/kategori/edit/:kategori_id
router.put(
	"/kategori/edit/:kategori_id",
	authenticateJWT,
	editKategoriBerita
	/**
	 * #swagger
	 * #swagger.tags = ['Berita']
	 * #swagger.path = '/api/v1/berita/kategori/edit/{:kategori_id}'
	 * #swagger.description = 'Ambil daftar semua Kategori Berita.'
	 * #swagger.summary = 'Ambil daftar semua Kategori Berita.'
	 * #swagger.method = 'put'
	 * #swagger.parameters[':kategori_id'] = { in: 'path', description: 'ID Kategori Berita.', required: true, type: 'string' }
	 * #swagger.security = [{ "BearerAuth": [] }]
	 * #swagger.deprecated = true
	 */
);

// api/v1/berita/kategori/delete/:kategori_id
router.delete(
	"/kategori/delete/:kategori_id",
	authenticateJWT,
	hapusKategoriBerita
	/**
	 * #swagger
	 * #swagger.tags = ['Berita']
	 * #swagger.path = '/api/v1/berita/kategori/delete/{:kategori_id}'
	 * #swagger.description = 'Ambil daftar semua Kategori Berita.'
	 * #swagger.summary = 'Ambil daftar semua Kategori Berita.'
	 * #swagger.method = 'delete'
	 * #swagger.parameters[':kategori_id'] = { in: 'path', description: 'ID Kategori Berita.', required: true, type: 'string' }
	 * #swagger.security = [{ "BearerAuth": [] }]
	 * #swagger.deprecated = true
	 */
);

// api/v1/berita/add
router.post(
	"/add",
	// csrfProtection,
	authenticateJWT,
	// validasiBuatBerita,
	buatBerita
	/**
	 * #swagger
	 * #swagger.tags = ['Berita']
	 * #swagger.path = '/api/v1/berita/add'
	 * #swagger.description = 'Menambahkan Berita baru.'
	 * #swagger.summary = 'Menambahkan Berita baru.'
	 * #swagger.method = 'post'
	 * #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/Berita' } }
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
);

// api/v1/berita/edit/:berita_id
router.put(
	"/edit/:berita_id",
	// csrfProtection,
	authenticateJWT,
	// validasiPutBerita,
	editBeritaLengkap
	/**
	 * #swagger
	 * #swagger.tags = ['Berita']
	 * #swagger.path = '/api/v1/berita/edit/{id}'
	 * #swagger.description = 'Mengubah data Berita berdasarkan ID.'
	 * #swagger.summary = 'Mengubah data Berita berdasarkan ID.'
	 * #swagger.method = 'put'
	 * #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/BeritaReplace' } }
	 * #swagger.parameters['id'] = { in: 'path', description: 'ID Berita.', required: true, type: 'string' }
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
);

// api/v1/berita/edit/:berita_id
router.patch(
	"/edit/:berita_id",
	// csrfProtection,
	authenticateJWT,
	// validasiPatchBerita,
	editBeritaSebagian
	/**
	 * #swagger
	 * #swagger.tags = ['Berita']
	 * #swagger.path = '/api/v1/berita/edit/{id}'
	 * #swagger.description = 'Mengubah data Berita berdasarkan ID.'
	 * #swagger.summary = 'Mengubah data Berita berdasarkan ID.'
	 * #swagger.method = 'patch'
	 * #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/BeritaUpdate' } }
	 * #swagger.parameters['id'] = { in: 'path', description: 'ID Berita.', required: true, type: 'string' }
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
);

// api/v1/berita/delete/:berita_id
router.delete(
	"/delete/:berita_id",
	// csrfProtection,
	authenticateJWT,
	// validasiHapusBerita,
	hapusBerita
	/**
	 * #swagger
	 * #swagger.tags = ['Berita']
	 * #swagger.path = '/api/v1/berita/delete/{id}'
	 * #swagger.description = 'Menghapus Berita berdasarkan ID.'
	 * #swagger.summary = 'Menghapus Berita berdasarkan ID.'
	 * #swagger.method = 'delete'
	 * #swagger.parameters['id'] = { in: 'path', description: 'ID Berita.', required: true, type: 'string' }
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
);

export default router;
