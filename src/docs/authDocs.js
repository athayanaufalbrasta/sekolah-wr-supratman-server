/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Manajemen data auth/event
 */

/**
 * @swagger
 * /api/v1/auth/auth-status:
 *   get:
 *     tags: [Auth]
 *     description: Rute untuk cek status user, membutuhkan authorization token di request header
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         type: string
 *         description: Bearer <token>
 *         required: true
 */

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     tags: [Auth]
 *     description: Rute untuk validasi login user
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 */

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     tags: [Auth]
 *     description: Rute untuk validasi register user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               nama_lengkap:
 *                 type: string
 *               role_id:
 *                 type: string
 */

/**
 * @swagger
 * /api/v1/auth/forgot-password:
 *   post:
 *     tags: [Auth]
 *     description: Rute untuk kirim email lupa password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User email
 */

/**
 * @swagger
 * /api/v1/auth/reset-password:
 *   post:
 *     tags: [Auth]
 *     description: Rute untuk reset password setelah menerima email konfirmasi lupa password
 *     parameters:
 *       - in: query
 *         name: token
 *         description: User ID
 *         required: true
 *         type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 */

/**
 * @swagger
 * /api/v1/auth/clear-session:
 *   post:
 *     tags: [Auth]
 *     description: Rute untuk logout user
 */
