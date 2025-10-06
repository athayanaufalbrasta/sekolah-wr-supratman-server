import express from "express";
import { buatBerita, editBeritaLengkap, editBeritaSebagian, hapusBerita, ambilDetailBerita, ambilSemuaBerita } from "../controllers/beritaController.js";
import authenticateJWT from "../middlewares/jwtVerification.js";
// import { validasiBuatBerita, validasiEditBerita, validasiHapusBerita } from "../validators/beritaValidator.js";
// import { checkValidationResult } from "../middlewares/checkValidationResult.js";

const router = express.Router();

router.get(
	"/",
	ambilSemuaBerita,
	/**
	 * #swagger
	 * #swagger.tags = ['Berita']
	 * #swagger.path = '/api/v1/berita/'
	 * #swagger.description = 'Melihat daftar semua Berita.'
	 * #swagger.summary = 'Melihat daftar semua Berita.'
	 * #swagger.method = 'get'
	 */
);

router.get(
	"/:id",
	ambilDetailBerita,
	/**
	 * #swagger
	 * #swagger.tags = ['Berita']
	 * #swagger.path = '/api/v1/berita/{id}'
	 * #swagger.description = 'Melihat detail Berita berdasarkan ID.'
	 * #swagger.summary = 'Melihat detail Berita berdasarkan ID.'
	 * #swagger.method = 'get'
	 * #swagger.parameters['id'] = { in: 'path', description: 'ID Berita.', required: true, type: 'string' }
	 */
);

router.post(
	"/add",
	authenticateJWT,
	// validasiBuatBerita,
	buatBerita,
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

router.put(
	"/edit/:id",
	authenticateJWT,
	// validasiEditBerita,
	// checkValidationResult,
	editBeritaLengkap,
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

router.patch(
	"/edit/:id",
	authenticateJWT,
	// validasiEditBerita,
	// checkValidationResult,
	editBeritaSebagian,
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

router.delete(
	"/delete/:id",
	authenticateJWT,
	// validasiHapusBerita,
	// checkValidationResult,
	hapusBerita,
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
