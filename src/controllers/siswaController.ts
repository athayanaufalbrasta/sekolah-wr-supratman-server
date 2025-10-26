import { Request, Response } from "express";
// import SiswaService from "../services/siswaService";

export const buatSiswaBaru = async (req: Request, res: Response) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const lihatSemuaSiswa = async (req: Request, res: Response) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const lihatSingleSiswa = async (req: Request, res: Response) => {
	const { siswa_id } = req.params;
	console.log(siswa_id);

	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const editSiswa = async (req: Request, res: Response) => {
	const { siswa_id } = req.params;
	console.log(siswa_id);

	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const hapusSiswa = async (req: Request, res: Response) => {
	const { siswa_id } = req.params;
	console.log(siswa_id);

	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan," });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export const lihatNilaiSiswa = async (req: Request, res: Response) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};
export const lihatPrestasiSiswaSpesifik = async (req: Request, res: Response) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};
export const lihatRiwayatKenaikanKelas = async (req: Request, res: Response) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};
export const linkUserToSiswa = async (req: Request, res: Response) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};
export const unlinkUserFromSiswa = async (req: Request, res: Response) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};
export const cariSiswaByKeyword = async (req: Request, res: Response) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};
