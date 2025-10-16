import { uid } from "uid";
import db from "../config/db.js";

const addPhoto = async (path_file, caption) => {
	try {
		const result = await db.galleries.create({
			data: { pic_id: uid(10), path_file, caption },
		});
		return result;
	} catch (error) {
		console.error("Something's not right!", error);
		throw error;
	}
};

const getPhotos = async () => {
	try {
		const result = await db.galleries.findMany({ orderBy: { created_at: "desc" } });
		return result;
	} catch (error) {
		console.error("Something's not right!", error);
		throw error;
	}
};

const getPhotoById = async (pic_id) => {
	try {
		const result = await db.galleries.findFirst(pic_id);
		return result;
	} catch (error) {
		console.error("Something's not right!", error);
		throw error;
	}
};

const editPhoto = async (pic_id, caption) => {
	try {
		const result = await db.galleries.update({ where: { pic_id }, data: { caption } });
		return result;
	} catch (error) {
		console.error("Something's not right!", error);
		throw error;
	}
};

const deletePhoto = async (pic_id) => {
	try {
		const result = await db.galleries.delete({ where: { pic_id } });
		return result;
	} catch (error) {
		console.error("Something's not right!", error);
		throw error;
	}
};

export default {
	addPhoto,
	getPhotos,
	getPhotoById,
	editPhoto,
	deletePhoto,
};
