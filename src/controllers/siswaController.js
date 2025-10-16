import siswaService from "../services/siswaService.js";

export const buatSiswaBaru = async (req, res) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const lihatSemuaSiswa = async (req, res) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const lihatSingleSiswa = async (req, res) => {
	const { siswa_id } = req.params;

	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const editSiswa = async (req, res) => {
	const { siswa_id } = req.params;
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const hapusSiswa = async (req, res) => {
	const { siswa_id } = req.params;
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const lihatNilaiSiswa = async (req, res) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};
export const lihatPrestasiSiswaSpesifik = async (req, res) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};
export const lihatRiwayatKenaikanKelas = async (req, res) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};
export const linkUserToSiswa = async (req, res) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};
export const unlinkUserFromSiswa = async (req, res) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};
export const cariSiswaByKeyword = async (req, res) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};
