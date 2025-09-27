import db from "../config/db.js";

const buatBeritaBaru = async (data) => {
	try {
		const result = await db.berita.create({
			data,
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const lihatSemuaBerita = async () => {
	try {
		const result = await db.berita.findMany();
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const lihatSingleBerita = async (berita_id) => {
	try {
		const result = await db.berita.findUnique({
			where: {
				berita_id,
			},
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const editBerita = async (berita_id, data) => {
	try {
		const result = await db.berita.update({
			where: {
				berita_id,
			},
			data,
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const hapusBerita = async (berita_id) => {
	try {
		const result = await db.berita.delete({
			where: {
				berita_id,
			},
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

export default { buatBeritaBaru, lihatSemuaBerita, lihatSingleBerita, editBerita, hapusBerita };
