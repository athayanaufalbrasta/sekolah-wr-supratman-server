import db from "../config/db.js";
import { supabase } from "../config/supabase.js";

const BUCKET_NAME = "images";

const addPhoto = async (fileBuffer, mimeType, originalName, caption) => {
	const fileExtension = originalName.split(".").pop();
	const storagePath = `images/${originalName}.${fileExtension}`;

	try {
		const { data: uploadData, error: uploadError } = await supabase.storage
			.from(BUCKET_NAME)
			.upload(storagePath, fileBuffer, {
				cacheControl: "3600",
				upsert: false,
				contentType: mimeType,
			});

		if (uploadError) {
			console.error("Supabase Upload Error:", uploadError);
			throw new Error("Gagal mengunggah file ke storage.");
		}

		const result = await db.galleries.create({
			data: { folder_name: "images", pic_name: originalName, caption },
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
		const result = await db.galleries.findFirst({ where: { pic_id } });
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
		const galleryItem = await db.galleries.findUnique({ where: { pic_id } });
		if (!galleryItem) throw new Error("Foto tidak ditemukan.");

		const storagePath = galleryItem.path_file;
		const result = await db.galleries.delete({ where: { pic_id } });
		const { error: deleteError } = await supabase.storage.from(BUCKET_NAME).remove([storagePath]); // Supabase menerima array of paths

		if (deleteError) {
			console.warn("Peringatan: Gagal menghapus file dari Supabase Storage.", deleteError);
		}

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
