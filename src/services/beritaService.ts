import db from "../config/db";
import { Berita, KategoriBerita } from "../types/prisma.d";
import { generateSlug } from "../utils/generateSlug";

const buatBerita = async (data: Berita) => {
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

const ambilDetailBerita = async (berita_id: string) => {
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

const editBeritaLengkap = async (berita_id: string, data: Berita) => {
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

const editBeritaSebagian = async (berita_id: string, data: Berita) => {
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

const hapusBerita = async (berita_id: string) => {
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

const ambilBerdasarkanKategoriBerita = async (kategori_id: string) => {
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

const buatKategoriBerita = async (data: KategoriBerita) => {
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

const editKategoriBerita = async (berita_id: string, data: KategoriBerita) => {
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

const hapusKategoriBerita = async (berita_id: string) => {
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
