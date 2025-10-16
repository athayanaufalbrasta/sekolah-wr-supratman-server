import userService from "../services/userService.js";

const buatUserBaru = async (req, res) => {
	try {
		return;
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};
const lihatSemuaUser = async (req, res) => {
	try {
		return;
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};
const lihatSingleUser = async (req, res) => {
	try {
		return;
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};
const editUser = async (req, res) => {
	try {
		return;
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};
const hapusUser = async (req, res) => {
	try {
		return;
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};
const updateUserRole = async (req, res) => {
	try {
		return;
	} catch (err) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: err,
		});
	}
};
const toggleUserStatus = async (req, res) => {
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
