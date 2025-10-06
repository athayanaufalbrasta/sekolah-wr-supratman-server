import db from "../config/db.js";

const buatBerita = async (data) => {
	try {
		const result = await db.berita.create({
			data: {
				judul: data.judul,
				slug: data.slug,
				kategori_id: data.kategori_id,
				konten_lengkap: data.konten_lengkap,
				ringkasan: data.ringkasan,
				gambar_utama: data.gambar_utama,
				kategori: data.kategori,
				tags: data.tags,
				editor_user_id: data.editor_user_id,
				penulis_user_id: data.penulis_user_id,
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

export default { buatBerita, ambilSemuaBerita, ambilDetailBerita, editBeritaLengkap, editBeritaSebagian, hapusBerita };
