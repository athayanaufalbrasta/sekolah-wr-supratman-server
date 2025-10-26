import express from "express";
import {
	buatPengumuman,
	ambilDetailPengumuman,
	ambilSemuaPengumuman,
	editPengumumanLengkap,
	editPengumumanSebagian,
	hapusPengumuman,
} from "../controllers/pengumumanController";
// import { validasiBuatPengumuman, validasiEditPengumuman, validasiHapusPengumuman } from "../validators/pengumumanValidator";
// import { checkValidationResult } from "../middlewares/checkValidationResult";
import authenticateJWT from "../middlewares/jwtVerification";

const router = express.Router();

router.get(
	"/",
	ambilSemuaPengumuman,
	/**
	 * #swagger
	 * #swagger.tags = ['Pengumuman']
	 * #swagger.path = '/api/v1/pengumuman/'
	 * #swagger.description = 'Melihat daftar semua Pengumuman.'
	 * #swagger.summary = 'Melihat daftar semua Pengumuman.'
	 * #swagger.method = 'get'
	 */
);

router.get(
	"/:id",
	ambilDetailPengumuman,
	/**
	 * #swagger
	 * #swagger.tags = ['Pengumuman']
	 * #swagger.path = '/api/v1/pengumuman/{id}'
	 * #swagger.description = 'Melihat detail Pengumuman berdasarkan ID.'
	 * #swagger.summary = 'Melihat detail Pengumuman berdasarkan ID.'
	 * #swagger.method = 'get'
	 * #swagger.parameters['id'] = { in: 'path', description: 'ID Pengumuman.', required: true, type: 'string' }
	 */
);

router.post(
	"/add",
	authenticateJWT,
	// validasiBuatPengumuman,
	buatPengumuman,
	/**
	 * #swagger
	 * #swagger.tags = ['Pengumuman']
	 * #swagger.path = '/api/v1/pengumuman/add'
	 * #swagger.description = 'Menambahkan Pengumuman baru.'
	 * #swagger.summary = 'Menambahkan Pengumuman baru.'
	 * #swagger.method = 'post'
	 * #swagger.security = [{ "BearerAuth": [] }]
	 * #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/Pengumuman' } }
	 */
);

router.put(
	"/edit/:id",
	authenticateJWT,
	// validasiEditPengumuman,
	// checkValidationResult,
	editPengumumanLengkap,
	/**
	 * #swagger
	 * #swagger.tags = ['Pengumuman']
	 * #swagger.path = '/api/v1/pengumuman/edit/{id}'
	 * #swagger.description = 'Mengubah data Pengumuman berdasarkan ID.'
	 * #swagger.summary = 'Mengubah data Pengumuman berdasarkan ID.'
	 * #swagger.method = 'put'
	 * #swagger.parameters['id'] = {in: 'path', description: 'ID Pengumuman.', required: true, type: 'string'}
	 * #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/PengumumanReplace' } }
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
);

router.patch(
	"/edit/:id",
	authenticateJWT,
	// validasiEditPengumuman,
	// checkValidationResult,
	editPengumumanSebagian,
	/**
	 * #swagger
	 * #swagger.tags = ['Pengumuman']
	 * #swagger.path = '/api/v1/pengumuman/edit/{id}'
	 * #swagger.description = 'Mengubah data Pengumuman berdasarkan ID.'
	 * #swagger.summary = 'Mengubah data Pengumuman berdasarkan ID.'
	 * #swagger.method = 'patch'
	 * #swagger.parameters['id'] = {in: 'path', description: 'ID Pengumuman.', required: true, type: 'string'}
	 * #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/PengumumanUpdate' } }
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
);

router.delete(
	"/delete/:id",
	authenticateJWT,
	// validasiHapusPengumuman,
	// checkValidationResult,
	hapusPengumuman,
	/**
	 * #swagger
	 * #swagger.tags = ['Pengumuman']
	 * #swagger.path = '/api/v1/pengumuman/delete/{id}'
	 * #swagger.description = 'Menghapus Pengumuman berdasarkan ID.'
	 * #swagger.summary = 'Menghapus Pengumuman berdasarkan ID.'
	 * #swagger.method = 'delete'
	 * #swagger.parameters['id'] = {in: 'path', description: 'ID Pengumuman.', required: true, type: 'string'}
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
);

export default router;
