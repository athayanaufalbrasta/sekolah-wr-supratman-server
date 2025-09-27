import beritaService from "../services/beritaService.js";

export const buatBeritaBaru = async (req, res) => {
	try {
		const result = await beritaService.buatBeritaBaru(req.body);
		res.status(201).json({ message: "Berita berhasil dibuat", data: result });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const lihatSemuaBerita = async (req, res) => {
	try {
		const result = await beritaService.lihatSemuaBerita();
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

export const lihatSingleBerita = async (req, res) => {
	const { id } = req.params;

	try {
		const result = await beritaService.lihatSingleBerita(id);

		if (!result) {
			return res.status(404).json({
				message: "Berita tidak ditemukan",
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

export const editBerita = async (req, res) => {
	const { id } = req.params;
	try {
		const cariBerita = await beritaService.lihatSingleBerita(id);
		if (!cariBerita) {
			return res.status(404).json({
				message: "Berita tidak ditemukan",
			});
		}

		const result = await beritaService.editBerita(id, req.body);
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
		const cariBerita = await beritaService.lihatSingleBerita(req.params.berita_id);
		if (!cariBerita) {
			return res.status(404).json({
				message: "Berita tidak ditemukan",
			});
		}

		const result = await beritaService.hapusBerita(id);
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

