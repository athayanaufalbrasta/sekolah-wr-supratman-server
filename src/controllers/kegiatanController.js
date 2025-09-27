import kegiatanService from "../services/kegiatanService.js";

export const buatKegiatanBaru = async (req, res) => {
	try {
		const result = await kegiatanService.buatKegiatanBaru(req.body);
		res.status(201).json({ message: "Kegiatan berhasil dibuat", data: result });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const lihatSemuaKegiatan = async (req, res) => {
	try {
		const result = await kegiatanService.lihatSemuaKegiatan();
		res.status(200).json({
			message: "Kegiatan berhasil diambil",
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const lihatSingleKegiatan = async (req, res) => {
	const { id } = req.params;

	try {
		const result = await kegiatanService.lihatSingleKegiatan(id);

		if (!result) {
			return res.status(404).json({
				message: "Kegiatan tidak ditemukan",
			});
		}
		res.status(200).json({
			message: `Kegiatan dengan id ${id} berhasil diambil`,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const editKegiatan = async (req, res) => {
	const { id } = req.params;
	try {
		const cariKegiatan = await kegiatanService.lihatSingleKegiatan(id);
		if (!cariKegiatan) {
			return res.status(404).json({
				message: "Kegiatan tidak ditemukan",
			});
		}

		const result = await kegiatanService.editKegiatan(id, req.body);
		res.status(200).json({
			message: `Kegiatan dengan id ${id} berhasil diupdate`,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const hapusKegiatan = async (req, res) => {
	const { id } = req.params;
	try {
		const cariKegiatan = await kegiatanService.lihatSingleKegiatan(req.params.Kegiatan_id);
		if (!cariKegiatan) {
			return res.status(404).json({
				message: "Kegiatan tidak ditemukan",
			});
		}

		const result = await kegiatanService.hapusKegiatan(id);
		res.status(200).json({
			message: `Kegiatan dengan id ${id} berhasil dihapus`,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};
