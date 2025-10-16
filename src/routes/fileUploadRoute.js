import express from "express";
import galleriesController from "../controllers/galleriesController.js";
import uploadSinglePhoto from "../middlewares/uploadMiddleware.js";
import authenticateJWT from "../middlewares/jwtVerification.js";

const router = express.Router();

// add photo
router.post(
	"/photo/add",
	authenticateJWT,
	uploadSinglePhoto,
	galleriesController.addPhoto
	/**
	 * #swagger
	 * #swagger.tags = ['Galleries']
	 * #swagger.path = '/api/v1/galleries/photo/add'
	 * #swagger.description = ''
	 * #swagger.summary = ''
	 * #swagger.method = 'post'
	 * #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/Galleries' } }
	 * #swagger.security = [{ "BearerAuth": [] }]
	 * #swagger.responses[200] = { description: 'Authenticated' }
	 * #swagger.responses[401] = { description: 'Unauthorized' }
	 */
);

// get all photos
router.get(
	"/photo/all",
	galleriesController.getPhotos
	/**
	 * #swagger
	 * #swagger.tags = ['Galleries']
	 * #swagger.path = '/api/v1/galleries/photo/all'
	 * #swagger.description = ''
	 * #swagger.summary = ''
	 * #swagger.method = 'get'
	 */
);

// get photo by id
router.get(
	"/photo/:pic_id",
	galleriesController.getPhotoById
	/**
	 * #swagger
	 * #swagger.tags = ['Galleries']
	 * #swagger.path = '/api/v1/galleries/photo/{:pic_id}'
	 * #swagger.parameters[':pic_id'] = { in: 'path', description: 'ID photo.', required: true, type: 'string' }
	 * #swagger.description = ''
	 * #swagger.summary = ''
	 * #swagger.method = 'get'
	 * #swagger.security = [{ "BearerAuth": [] }]
	 */
);

// edit photo by id
router.put(
	"/photo/edit/:pic_id",
	authenticateJWT,
	galleriesController.editPhoto
	/**
	 * #swagger
	 * #swagger.tags = ['Galleries']
	 * #swagger.path = '/api/v1/galleries/photo/edit/{:pic_id}'
	 * #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/GalleriesReplace' } }
	 * #swagger.parameters[':pic_id'] = { in: 'path', description: 'ID photo.', required: true, type: 'string' }
	 * #swagger.description = ''
	 * #swagger.summary = ''
	 * #swagger.method = 'put'
	 * #swagger.security = [{ "BearerAuth": [] }]
	 * #swagger.responses[200] = { description: 'Authenticated' }
	 * #swagger.responses[401] = { description: 'Unauthorized' }
	 */
);

// delete photo
router.delete(
	"/photo/delete/:pic_id",
	authenticateJWT,
	galleriesController.deletePhoto
	/**
	 * #swagger
	 * #swagger.tags = ['Galleries']
	 * #swagger.path = '/api/v1/galleries/photo/delete/{:pic_id}'
	 * #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/GalleriesUpdate' } }
	 * #swagger.parameters[':pic_id'] = { in: 'path', description: 'ID photo.', required: true, type: 'string' }
	 * #swagger.description = ''
	 * #swagger.summary = ''
	 * #swagger.method = 'delete'
	 * #swagger.security = [{ "BearerAuth": [] }]
	 * #swagger.responses[200] = { description: 'Authenticated' }
	 * #swagger.responses[401] = { description: 'Unauthorized' }
	 */
);

export default router;
