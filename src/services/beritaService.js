import { uid } from "uid";
import db from "../config/db.js";
import { generateSlug } from "../utils/generateSlug.js";

const buatBerita = async (data) => {
	try {
		const result = await db.berita.create({
			data: {
				berita_id: uid(10),
				slug: generateSlug(data.judul),
				...data,

				// judul: data.judul,
				// ringkasan: data.ringkasan,
				// konten_lengkap: data.konten_lengkap,
				// kategori_id: data.kategori_id,
				// gambar_utama: data.gambar_utama,
				// tanggal_publikasi: data.tanggal_publikasi,
				// penulis_user_id: data.penulis_user_id,
				// editor_user_id: data.editor_user_id,
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
