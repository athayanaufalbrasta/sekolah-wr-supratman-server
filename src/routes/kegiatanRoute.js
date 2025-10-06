import express from "express";
import {
	buatKegiatan,
	ambilDetailKegiatan,
	ambilSemuaKegiatan,
	editKegiatanLengkap,
	editKegiatanSebagian,
	hapusKegiatan,
} from "../controllers/kegiatanController.js";
// import { validasiBuatKegiatan, validasiEditKegiatan, validasiHapusKegiatan } from "../validators/kegiatanValidator.js";
// import { checkValidationResult } from "../middlewares/checkValidationResult.js";
import authenticateJWT from "../middlewares/jwtVerification.js";

const router = express.Router();

router.get(
	"/",
	ambilSemuaKegiatan,
	/**
	 * #swagger
	 * #swagger.tags = ['Kegiatan']
	 * #swagger.path = '/api/v1/kegiatan/'
	 * #swagger.description = 'Melihat daftar semua Kegiatan.'
	 * #swagger.summary = 'Melihat daftar semua Kegiatan.'
	 * #swagger.method = 'get'
	 */
);

router.get(
	"/:id",
	authenticateJWT,
	ambilDetailKegiatan,
	/**
	 * #swagger
	 * #swagger.tags = ['Kegiatan']
	 * #swagger.path = '/api/v1/kegiatan/{id}'
	 * #swagger.description = 'Melihat detail Kegiatan berdasarkan ID.'
	 * #swagger.summary = 'Melihat detail Kegiatan berdasarkan ID.'
	 * #swagger.method = 'get'
	 * #swagger.parameters['id'] = {in: 'path', description: 'ID Kegiatan.', required: true, type: 'string'}
	 */
);

router.post(
	"/add",
	authenticateJWT,
	// validasiBuatKegiatan,
	buatKegiatan,
	/**
	 * #swagger
	 * #swagger.tags = ['Kegiatan']
	 * #swagger.path = '/api/v1/kegiatan/add'
	 * #swagger.description = 'Menambahkan Kegiatan baru.'
	 * #swagger.summary = 'Menambahkan Kegiatan baru.'
	 * #swagger.method = 'post'
	 * #swagger.security = [{ "BearerAuth": [] }]
	 * #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/Kegiatan' } }
	 */
);

router.put(
	"/edit/:id",
	authenticateJWT,
	// validasiEditKegiatan,
	// checkValidationResult,
	editKegiatanLengkap,
	/**
	 * #swagger
	 * #swagger.tags = ['Kegiatan']
	 * #swagger.path = '/api/v1/kegiatan/edit/{id}'
	 * #swagger.description = 'Mengubah data Kegiatan berdasarkan ID.'
	 * #swagger.summary = 'Mengubah data Kegiatan berdasarkan ID.'
	 * #swagger.method = 'put'
	 * #swagger.security = [{ "BearerAuth": [] }]
	 * #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/KegiatanReplace' } }
	 * #swagger.parameters['id'] = { in: 'path', description: 'ID Kegiatan.', required: true, type: 'string' }
	 */
);

router.patch(
	"/edit/:id",
	authenticateJWT,
	// validasiEditKegiatan,
	// checkValidationResult,
	editKegiatanSebagian,
	/**
	 * #swagger
	 * #swagger.tags = ['Kegiatan']
	 * #swagger.path = '/api/v1/kegiatan/edit/{id}'
	 * #swagger.description = 'Mengubah data Kegiatan berdasarkan ID.'
	 * #swagger.summary = 'Mengubah data Kegiatan berdasarkan ID.'
	 * #swagger.method = 'patch'
	 * #swagger.security = [{ "BearerAuth": [] }]
	 * #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/KegiatanUpdate' } }
	 * #swagger.parameters['id'] = { in: 'path', description: 'ID Kegiatan.', required: true, type: 'string' }
	 */
);

router.delete(
	"/delete/:id",
	authenticateJWT,
	// validasiHapusKegiatan,
	// checkValidationResult,
	hapusKegiatan,
	/**
	 * #swagger
	 * #swagger.tags = ['Kegiatan']
	 * #swagger.path = '/api/v1/kegiatan/delete/{id}'
	 * #swagger.description = 'Menghapus Kegiatan berdasarkan ID.'
	 * #swagger.summary = 'Menghapus Kegiatan berdasarkan ID.'
	 * #swagger.method = 'delete'
	 * #swagger.parameters['id'] = { in: 'path', description: 'ID Kegiatan.', required: true, type: 'string' }
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
);

export default router;
