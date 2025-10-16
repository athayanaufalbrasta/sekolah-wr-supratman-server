import db from "../config/db.js";
import { generateSlug } from "../utils/generateSlug.js";

const buatBerita = async (data) => {
	try {
		const result = await db.berita.create({
			data: {
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

const ambilSemuaBerita = async () => {
	try {
		const result = await db.berita.findMany();
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const ambilDetailBerita = async (berita_id) => {
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

const editBeritaLengkap = async (berita_id, data) => {
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

const editBeritaSebagian = async (berita_id, data) => {
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

// Kategori/Tag Berita
const ambilSemuaKategoriBerita = async () => {
	try {
		const result = await db.kategori_berita.findMany();
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const ambilBerdasarkanKategoriBerita = async (kategori_id) => {
	try {
		const result = await db.berita.findMany({
			where: {
				kategori_id,
			},
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const buatKategoriBerita = async (data) => {
	try {
		const result = await db.kategori_berita.create({
			data,
		});
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const editKategoriBerita = async (berita_id, data) => {
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

const hapusKategoriBerita = async (berita_id) => {
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

export default {
	buatBerita,
	ambilSemuaBerita,
	ambilDetailBerita,
	editBeritaLengkap,
	editBeritaSebagian,
	hapusBerita,
	ambilSemuaKategoriBerita,
	ambilBerdasarkanKategoriBerita,
	buatKategoriBerita,
	editKategoriBerita,
	hapusKategoriBerita,
};
