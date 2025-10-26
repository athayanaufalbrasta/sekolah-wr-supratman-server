import { Request, Response } from "express";
import beritaService from "../services/beritaService";

export const buatBerita = async (req: Request, res: Response) => {
	try {
		const result = await beritaService.buatBerita(req.body);
		res.status(201).json({ message: "Berita berhasil dibuat", data: result });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const ambilSemuaBerita = async (req: Request, res: Response) => {
	try {
		const result = await beritaService.ambilSemuaBerita();
		res.status(200).json({
			message: "Berita berhasil diambil",
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const ambilDetailBerita = async (req: Request, res: Response) => {
	const { berita_id } = req.params;

	try {
		const result = await beritaService.ambilDetailBerita(berita_id);

		if (!result) {
			return res.status(404).json({
				message: "Berita tidak ditemukan",
				data: null,
			});
		}
		res.status(200).json({
			message: `Berita dengan id ${berita_id} berhasil diambil`,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const editBeritaLengkap = async (req: Request, res: Response) => {
	const { berita_id } = req.params;
	try {
		const cariBerita = await beritaService.ambilDetailBerita(berita_id);
		if (!cariBerita) {
			return res.status(404).json({
				message: "Berita tidak ditemukan, Gagal melakukan update data",
				data: null,
			});
		}

		const result = await beritaService.editBeritaLengkap(berita_id, req.body);
		res.status(200).json({
			message: `Berita dengan id ${berita_id} berhasil diupdate`,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const editBeritaSebagian = async (req: Request, res: Response) => {
	const { berita_id } = req.params;
	try {
		const cariBerita = await beritaService.ambilDetailBerita(berita_id);
		if (!cariBerita) {
			return res.status(404).json({
				message: "Berita tidak ditemukan, Gagal melakukan update data",
				data: null,
			});
		}

		const result = await beritaService.editBeritaSebagian(berita_id, req.body);
		res.status(200).json({
			message: `Berita dengan id ${berita_id} berhasil diupdate`,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const hapusBerita = async (req: Request, res: Response) => {
	const { berita_id } = req.params;
	try {
		const cariBerita = await beritaService.ambilDetailBerita(berita_id);
		if (!cariBerita) {
			return res.status(404).json({
				message: "Berita tidak ditemukan, Gagal menghapus",
				data: null,
			});
		}

		const result = await beritaService.hapusBerita(berita_id);
		res.status(200).json({
			message: `Berita dengan id ${berita_id} berhasil dihapus`,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

// KATEGORI

export const ambilSemuaKategoriBerita = async (req: Request, res: Response) => {
	try {
		const result = await beritaService.ambilSemuaKategoriBerita();
		res.status(200).json({
			message: "Kategori berita berhasil diambil",
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};
export const ambilBeritaBerdasarkanKategori = async (req: Request, res: Response) => {
	const { kategori_id } = req.params;
	try {
		const result = await beritaService.ambilBerdasarkanKategoriBerita(kategori_id);
		res.status(200).json({
			message: "Kategori berita berhasil diambil",
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};
export const buatKategoriBerita = async (req: Request, res: Response) => {
	try {
		const result = await beritaService.buatKategoriBerita(req.body);
		res.status(201).json({
			message: "Kategori berita berhasil dibuat",
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const editKategoriBerita = async (req: Request, res: Response) => {
	const { kategori_id } = req.params;
	try {
		const cariKategori = await beritaService.ambilBerdasarkanKategoriBerita(kategori_id);
		if (!cariKategori) {
			return res.status(404).json({
				message: "Kategori tidak ditemukan, Gagal melakukan update data",
				data: null,
			});
		}

		const result = await beritaService.editKategoriBerita(kategori_id, req.body);
		res.status(200).json({
			message: `Kategori berita dengan kategori_id ${kategori_id} berhasil diupdate`,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const hapusKategoriBerita = async (req: Request, res: Response) => {
	const { kategori_id } = req.params;
	try {
		const cariKategori = await beritaService.ambilBerdasarkanKategoriBerita(kategori_id);
		if (!cariKategori) {
			return res.status(404).json({
				message: "Kategori tidak ditemukan, Gagal menghapus",
				data: null,
			});
		}

		const result = await beritaService.hapusKategoriBerita(kategori_id);
		res.status(200).json({
			message: `Kategori berita dengan kategori_id ${kategori_id} berhasil dihapus`,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};
