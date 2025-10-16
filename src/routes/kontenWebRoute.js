import express from "express";
import {
	lihatSemuaKontenWeb,
	editKontenWeb,
	hapusKontenWeb,
} from "../controllers/kontenWebController.js";
// import { validasiLogin, validasiRegister, validasiForgotPassword, validasiResetPassword } from "../validators/authValidator.js";
import authenticateJWT from "../middlewares/jwtVerification.js";
const router = express.Router();

router.get(
	"/all",
	lihatSemuaKontenWeb
	/**
	 * #swagger
	 * #swagger.tags = ['Konten Web']
	 * #swagger.path = '/api/v1/konten-web/all'
	 * #swagger.description = 'Mengambil semua konten web'
	 * #swagger.summary = 'Mengambil semua konten web'
	 * #swagger.method = 'get'
	 * #swagger.deprecated = false
	 */
);

router.put(
	"/edit/:component_id",
	authenticateJWT,
	editKontenWeb
	/**
	 * #swagger
	 * #swagger.tags = ['Konten Web']
	 * #swagger.path = '/api/v1/konten-web/edit/{:component_id}'
	 * #swagger.description = 'Edit konten web berdasarkan component id(PUT)'
	 * #swagger.summary = 'Edit konten web berdasarkan component id(PUT)'
	 * #swagger.method = 'put'
	 * #swagger.deprecated = false
	 * #swagger.security = [{ "BearerAuth": [] }]
	 * #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/KontenWeb' } }
	 */
);

router.delete(
	"/remove/:component_id",
	authenticateJWT,
	hapusKontenWeb
	/**
	 * #swagger
	 * #swagger.tags = ['Konten Web']
	 * #swagger.path = '/api/v1/konten-web/remove/{:component_id}'
	 * #swagger.description = 'Hapus konten web berdasarkan component id'
	 * #swagger.summary = 'Hapus konten web berdasarkan component id'
	 * #swagger.method = 'delete'
	 * #swagger.deprecated = false
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
);

export default router;
