import galleriesService from "../services/galleriesService.js";

const addPhoto = async (req, res, next) => {
	if (!req.file) {
		return res.status(400).json({ message: "File foto tidak ditemukan." });
	}

	const { buffer, mimetype, originalname } = req.file;
	const { caption } = req.body;

	try {
		const newPhoto = await galleriesService.addPhoto(buffer, mimetype, originalname, caption);

		res.status(201).json({
			message: "Foto berhasil diunggah dan disimpan.",
			data: newPhoto,
		});
	} catch (error) {
		next(error);
	}
};

const getPhotos = async (req, res) => {
	try {
		const data = await galleriesService.getPhotos();
		res.status(200).json({
			message: "success",
			requestedData: data,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

const getPhotoById = async (req, res) => {
	const { pic_id } = req.params;
	try {
		const result = await galleriesService.getPhotoById(pic_id);
		res.status(200).json({
			message: "success",
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

const editPhoto = async (req, res) => {
	const { pic_id } = req.params;
	const { caption } = req.body;

	try {
		await galleriesService.editPhoto(pic_id, caption);
		res.status(200).json({
			message: "Photo updated successfully",
			data: { pic_id, caption },
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

const deletePhoto = async (req, res) => {
	const { pic_id } = req.params;

	try {
		await galleriesService.deletePhoto(pic_id);
		res.status(200).json({
			message: "Photo deleted successfully",
			data: { pic_id },
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export default {
	addPhoto,
	getPhotos,
	getPhotoById,
	editPhoto,
	deletePhoto,
};
