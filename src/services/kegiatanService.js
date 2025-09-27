import db from "../config/db.js";

const buatKegiatanBaru = async (data) => {
	try {
		const result = await db.kegiatan.create({
			data,
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const lihatSemuaKegiatan = async () => {
	try {
		const result = await db.kegiatan.findMany();
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const lihatSingleKegiatan = async (kegiatan_id) => {
	try {
		const result = await db.kegiatan.findUnique({
			where: {
				kegiatan_id,
			},
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const editKegiatan = async (kegiatan_id, data) => {
	try {
		const result = await db.kegiatan.update({
			where: {
				kegiatan_id,
			},
			data,
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const hapusKegiatan = async (kegiatan_id) => {
	try {
		const result = await db.kegiatan.delete({
			where: {
				kegiatan_id,
			},
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

export default { buatKegiatanBaru, lihatSemuaKegiatan, lihatSingleKegiatan, editKegiatan, hapusKegiatan };
