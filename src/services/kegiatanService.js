import { uid } from "uid";
import db from "../config/db.js";
import { generateSlug } from "../utils/generateSlug.js";

const buatKegiatan = async (data) => {
	try {
		const result = await db.kegiatan.create({
			data: {
				kegiatan_id: uid(10),
				slug: generateSlug(data.judul),
				...data,
			},
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const ambilSemuaKegiatan = async () => {
	try {
		const result = await db.kegiatan.findMany();
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const ambilDetailKegiatan = async (kegiatan_id) => {
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

const editKegiatanLengkap = async (kegiatan_id, data) => {
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

const editKegiatanSebagian = async (kegiatan_id, data) => {
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

export default {
	buatKegiatan,
	ambilSemuaKegiatan,
	ambilDetailKegiatan,
	editKegiatanLengkap,
	editKegiatanSebagian,
	hapusKegiatan,
};
