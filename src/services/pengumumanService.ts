import db from "../config/db";
import { Pengumuman } from "../types/prisma.d";

const buatPengumuman = async (data: Pengumuman) => {
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

const ambilSemuaPengumuman = async () => {
	try {
		const result = await db.pengumuman.findMany();
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const ambilDetailPengumuman = async (pengumuman_id: string) => {
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

const editPengumumanLengkap = async (pengumuman_id: string, data: Pengumuman) => {
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

const editPengumumanSebagian = async (pengumuman_id: string, data: Pengumuman) => {
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

const hapusPengumuman = async (pengumuman_id: string) => {
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

export default {
	buatPengumuman,
	ambilSemuaPengumuman,
	ambilDetailPengumuman,
	editPengumumanLengkap,
	editPengumumanSebagian,
	hapusPengumuman,
};
