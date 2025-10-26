import db from "../config/db";
import { Siswa } from "../types/prisma.d";

const buatSiswaBaru = async (data: Siswa) => {
	try {
		const result = await db.siswa.create({
			data,
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const lihatSemuaSiswa = async () => {
	try {
		const result = await db.siswa.findMany({
			include: {
				jenjang: true,
				kenaikan_kelas: true,
				nilai: true,
				orang_tua: true,
			},
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const lihatSingleSiswa = async (siswa_id: string) => {
	try {
		const result = await db.siswa.findUnique({
			where: {
				siswa_id,
			},
			include: {
				jenjang: true,
				kenaikan_kelas: true,
				nilai: true,
			},
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const editSiswa = async (siswa_id: string, data: Siswa) => {
	try {
		const result = await db.siswa.update({
			where: {
				siswa_id,
			},
			data,
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const hapusSiswa = async (siswa_id: string) => {
	try {
		const result = await db.siswa.delete({
			where: {
				siswa_id,
			},
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

export default {
	buatSiswaBaru,
	lihatSemuaSiswa,
	lihatSingleSiswa,
	editSiswa,
	hapusSiswa,
};
