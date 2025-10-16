import express from "express";
import {
	buatUserBaru,
	lihatSemuaUser,
	lihatSingleUser,
	editUser,
	hapusUser,
	updateUserRole,
	toggleUserStatus,
} from "../controllers/userController.js";
// import { validasiUser } from "../validators/userValidator.js";

const router = express.Router();

// ==================================================================
// 1. MANAJEMEN DATA PENGGUNA (CRUD - Membutuhkan Admin Role)
// Ini fokus pada CRUD data user, bukan proses login/logout.
// ==================================================================
router.get(
	"/",
	lihatSemuaUser
	/**
	 * #swagger
	 * #swagger.tags = ['Users']
	 * #swagger.path = '/api/v1/users/'
	 * #swagger.description = 'Ambil semua daftar pengguna (Mendukung filter query)'
	 * #swagger.summary = 'Ambil semua daftar pengguna (Mendukung filter query)'
	 * #swagger.method = 'get'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Ambil semua daftar pengguna (Mendukung filter query)

router.post(
	"/add",
	buatUserBaru
	/**
	 * #swagger
	 * #swagger.tags = ['Users']
	 * #swagger.path = '/api/v1/users/add'
	 * #swagger.description = 'Buat akun pengguna baru (oleh Admin)'
	 * #swagger.summary = 'Buat akun pengguna baru (oleh Admin)'
	 * #swagger.method = 'post'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Buat akun pengguna baru (oleh Admin)

router.get(
	"/:id",
	lihatSingleUser
	/**
	 * #swagger
	 * #swagger.tags = ['Users']
	 * #swagger.path = '/api/v1/users/{:id}'
	 * #swagger.description = 'Ambil detail pengguna tunggal'
	 * #swagger.summary = 'Ambil detail pengguna tunggal'
	 * #swagger.method = 'get'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Ambil detail pengguna tunggal

router.put(
	"/edit/:id",
	editUser
	/**
	 * #swagger
	 * #swagger.tags = ['Users']
	 * #swagger.path = '/api/v1/users/edit/{:id}'
	 * #swagger.description = 'Update data user (PUT: full update)'
	 * #swagger.summary = 'Update data user (PUT: full update)'
	 * #swagger.method = 'put'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Update data user (PUT: full update)

router.patch(
	"/edit/:id",
	editUser
	/**
	 * #swagger
	 * #swagger.tags = ['Users']
	 * #swagger.path = '/api/v1/users/edit/{:id}'
	 * #swagger.description = 'Update data user (PATCH: parsial)'
	 * #swagger.summary = 'Update data user (PATCH: parsial)'
	 * #swagger.method = 'patch'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Update data user (PATCH: parsial)

router.delete(
	"/delete/:id",
	hapusUser
	/**
	 * #swagger
	 * #swagger.tags = ['Users']
	 * #swagger.path = '/api/v1/users/delete/{:id}'
	 * #swagger.description = 'Hapus akun pengguna'
	 * #swagger.summary = 'Hapus akun pengguna'
	 * #swagger.method = 'delete'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Hapus akun pengguna

// ==================================================================
// 2. MANAJEMEN ROLE & STATUS (Admin Control)
// ==================================================================
router.patch(
	"/:id/role",
	updateUserRole
	/**
	 * #swagger
	 * #swagger.tags = ['Users']
	 * #swagger.path = '/api/v1/users/{:id}/role'
	 * #swagger.description = 'Update role_id pengguna'
	 * #swagger.summary = 'Update role_id pengguna'
	 * #swagger.method = 'patch'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Update role_id pengguna

router.patch(
	"/:id/status",
	toggleUserStatus
	/**
	 * #swagger
	 * #swagger.tags = ['Users']
	 * #swagger.path = '/api/v1/users/{:id}/status'
	 * #swagger.description = 'Mengubah status is_aktif (true/false)'
	 * #swagger.summary = 'Mengubah status is_aktif (true/false)'
	 * #swagger.method = 'patch'
	 * #swagger.deprecated = true
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
); // Mengubah status is_aktif (true/false)

export default router;
