import kegiatanService from "../services/kegiatanService.js";

export const buatKegiatan = async (req, res) => {
	try {
		const result = await kegiatanService.buatKegiatan(req.body);
		res.status(201).json({ message: "Kegiatan berhasil dibuat", data: result });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const ambilSemuaKegiatan = async (req, res) => {
	try {
		const result = await kegiatanService.ambilSemuaKegiatan();
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

export const ambilDetailKegiatan = async (req, res) => {
	const { kegiatan_id } = req.params;

	try {
		const result = await kegiatanService.ambilDetailKegiatan(kegiatan_id);

		if (!result) {
			return res.status(404).json({
				message: "Kegiatan tidak ditemukan",
				data: null,
			});
		}
		res.status(200).json({
			message: `Kegiatan dengan id ${kegiatan_id} berhasil diambil`,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const editKegiatanLengkap = async (req, res) => {
	const { kegiatan_id } = req.params;
	try {
		const cariKegiatan = await kegiatanService.ambilDetailKegiatan(kegiatan_id);
		if (!cariKegiatan) {
			return res.status(404).json({
				message: "Kegiatan tidak ditemukan, Gagal melakukan update data",
				data: null,
			});
		}

		const result = await kegiatanService.editKegiatanLengkap(kegiatan_id, req.body);
		res.status(200).json({
			message: `Kegiatan dengan id ${kegiatan_id} berhasil diupdate`,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const editKegiatanSebagian = async (req, res) => {
	const { kegiatan_id } = req.params;
	try {
		const cariKegiatan = await kegiatanService.ambilDetailKegiatan(kegiatan_id);
		if (!cariKegiatan) {
			return res.status(404).json({
				message: "Kegiatan tidak ditemukan, Gagal melakukan update data",
				data: null,
			});
		}

		const result = await kegiatanService.editKegiatanSebagian(kegiatan_id, req.body);
		res.status(200).json({
			message: `Kegiatan dengan id ${kegiatan_id} berhasil diupdate`,
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
	const { kegiatan_id } = req.params;
	try {
		const cariKegiatan = await kegiatanService.ambilDetailKegiatan(kegiatan_id);
		if (!cariKegiatan) {
			return res.status(404).json({
				message: "Kegiatan tidak ditemukan, Gagal melakukan penghapusan data",
				data: null,
			});
		}

		const result = await kegiatanService.hapusKegiatan(kegiatan_id);
		res.status(200).json({
			message: `Kegiatan dengan id ${kegiatan_id} berhasil dihapus`,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};
