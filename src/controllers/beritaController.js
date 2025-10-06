import beritaService from "../services/beritaService.js";

export const buatBerita = async (req, res) => {
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

export const ambilSemuaBerita = async (req, res) => {
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

export const ambilDetailBerita = async (req, res) => {
	const { id } = req.params;

	try {
		const result = await beritaService.ambilDetailBerita(Number(id));

		if (!result) {
			return res.status(404).json({
				message: "Berita tidak ditemukan",
				data: null,
			});
		}
		res.status(200).json({
			message: `Berita dengan id ${id} berhasil diambil`,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const editBeritaLengkap = async (req, res) => {
	const { id } = req.params;
	try {
		const cariBerita = await beritaService.ambilDetailBerita(Number(id));
		if (!cariBerita) {
			return res.status(404).json({
				message: "Berita tidak ditemukan, Gagal melakukan update data",
				data: null,
			});
		}

		const result = await beritaService.editBeritaLengkap(Number(id), req.body);
		res.status(200).json({
			message: `Berita dengan id ${id} berhasil diupdate`,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const editBeritaSebagian = async (req, res) => {
	const { id } = req.params;
	try {
		const cariBerita = await beritaService.ambilDetailBerita(Number(id));
		if (!cariBerita) {
			return res.status(404).json({
				message: "Berita tidak ditemukan, Gagal melakukan update data",
				data: null,
			});
		}

		const result = await beritaService.editBeritaSebagian(Number(id), req.body);
		res.status(200).json({
			message: `Berita dengan id ${id} berhasil diupdate`,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const hapusBerita = async (req, res) => {
	const { id } = req.params;
	try {
		const cariBerita = await beritaService.ambilDetailBerita(Number(id));
		if (!cariBerita) {
			return res.status(404).json({
				message: "Berita tidak ditemukan, Gagal menghapus",
				data: null,
			});
		}

		const result = await beritaService.hapusBerita(Number(id));
		res.status(200).json({
			message: `Berita dengan id ${id} berhasil dihapus`,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};
