import pengumumanService from "../services/pengumumanService.js";

export const buatPengumumanBaru = async (req, res) => {
	try {
		const result = await pengumumanService.buatPengumumanBaru(req.body);
		res.status(201).json({ message: "Pengumuman berhasil dibuat", data: result });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const lihatSemuaPengumuman = async (req, res) => {
	try {
		const result = await pengumumanService.lihatSemuaPengumuman();
		res.status(200).json({
			message: "Pengumuman berhasil diambil",
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const lihatSinglePengumuman = async (req, res) => {
	const { id } = req.params;

	try {
		const result = await pengumumanService.lihatSinglePengumuman(id);

		if (!result) {
			return res.status(404).json({
				message: "Pengumuman tidak ditemukan",
			});
		}
		res.status(200).json({
			message: `Pengumuman dengan id ${id} berhasil diambil`,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const editPengumuman = async (req, res) => {
	const { id } = req.params;
	try {
		const cariPengumuman = await pengumumanService.lihatSinglePengumuman(id);
		if (!cariPengumuman) {
			return res.status(404).json({
				message: "Pengumuman tidak ditemukan",
			});
		}

		const result = await pengumumanService.editPengumuman(id, req.body);
		res.status(200).json({
			message: `Pengumuman dengan id ${id} berhasil diupdate`,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const hapusPengumuman = async (req, res) => {
	const { id } = req.params;
	try {
		const cariPengumuman = await pengumumanService.lihatSinglePengumuman(req.params.Pengumuman_id);
		if (!cariPengumuman) {
			return res.status(404).json({
				message: "Pengumuman tidak ditemukan",
			});
		}

		const result = await pengumumanService.hapusPengumuman(id);
		res.status(200).json({
			message: `Pengumuman dengan id ${id} berhasil dihapus`,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};
