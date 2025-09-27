import db from "../config/db.js";

export const buatPengumumanBaru = async (data) => {
	try {
		const result = await db.pengumuman.create({
			data,
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

export const lihatSemuaPengumuman = async () => {
	try {
		const result = await db.pengumuman.findMany();
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

export const lihatSinglePengumuman = async (pengumuman_id) => {
	try {
		const result = await db.pengumuman.findUnique({
			where: {
				pengumuman_id,
			},
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

export const editPengumuman = async (pengumuman_id, data) => {
	try {
		const result = await db.pengumuman.update({
			where: {
				pengumuman_id,
			},
			data,
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

export const hapusPengumuman = async (pengumuman_id) => {
	try {
		const result = await db.pengumuman.delete({
			where: {
				pengumuman_id,
			},
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};
