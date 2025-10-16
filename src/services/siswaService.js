import db from "../config/db.js";

const buatSiswaBaru = async (data) => {
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
				prestasi: true,
				users: true,
			},
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const lihatSingleSiswa = async (siswa_id) => {
	try {
		const result = await db.siswa.findUnique({
			where: {
				siswa_id,
			},
			include: {
				jenjang: true,
				kenaikan_kelas: true,
				nilai: true,
				prestasi: true,
				users: true,
			},
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const lihatSemuaPrestasiSiswa = async () => {
	try {
		const result = await db.prestasi.findMany({
			include: {
				siswa: true,
				guru: true,
			},
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const editSiswa = async (siswa_id, data) => {
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

const hapusSiswa = async (siswa_id) => {
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
	lihatSemuaPrestasiSiswa,
	editSiswa,
	hapusSiswa,
};
