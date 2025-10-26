import { Request, Response } from "express";
// import UserService from "../services/userService";

export const buatUserBaru = async (req: Request, res: Response) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};
export const lihatSemuaUser = async (req: Request, res: Response) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};
export const lihatSingleUser = async (req: Request, res: Response) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};
export const editUser = async (req: Request, res: Response) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};
export const hapusUser = async (req: Request, res: Response) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};
export const updateUserRole = async (req: Request, res: Response) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};
export const toggleUserStatus = async (req: Request, res: Response) => {
	try {
		res.status(201).json({ message: "endpoint belum bisa digunakan" });
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};
