import { Request, Response } from "express";

const buatUserBaru = async (req: Request, res: Response) => {
	try {
		return;
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};
const lihatSemuaUser = async (req: Request, res: Response) => {
	try {
		return;
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};
const lihatSingleUser = async (req: Request, res: Response) => {
	try {
		return;
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};
const editUser = async (req: Request, res: Response) => {
	try {
		return;
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};
const hapusUser = async (req: Request, res: Response) => {
	try {
		return;
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};
const updateUserRole = async (req: Request, res: Response) => {
	try {
		return;
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};
const toggleUserStatus = async (req: Request, res: Response) => {
	try {
		return;
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};

export default {
	buatUserBaru,
	lihatSemuaUser,
	lihatSingleUser,
	editUser,
	hapusUser,
	updateUserRole,
	toggleUserStatus,
};
