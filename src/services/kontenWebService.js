import db from "../config/db.js";

const lihatSemuaKontenWeb = async () => {
	try {
		const result = await db.konten_web.findMany();
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const editKontenWeb = async (konten_id, data) => {
	try {
		const result = await db.konten_web.update({
			where: {
				konten_id,
			},
			data,
		});
		return result;
	} catch (error) {
		if (error.code === "P2025") {
			const notFoundError = new Error(`Konten web dengan id '${konten_id}' tidak ditemukan.`);
			notFoundError.status = 404;
			throw notFoundError;
		}
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const hapusKontenWeb = async (konten_id) => {
	try {
		const result = await db.konten_web.delete({
			where: {
				konten_id,
			},
		});
		return result;
	} catch (error) {
		if (error.code === "P2025") {
			const notFoundError = new Error(`Konten web dengan id '${konten_id}' tidak ditemukan.`);
			notFoundError.status = 404;
			throw notFoundError;
		}
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

export default {
	lihatSemuaKontenWeb,
	editKontenWeb,
	hapusKontenWeb,
};
