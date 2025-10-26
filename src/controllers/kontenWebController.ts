import { Request, Response } from "express";
import kontenWebService from "../services/kontenWebService";

const getErrorMessage = (error: unknown): string => {
	if (error instanceof Error) {
		return error.message;
	}
	if (typeof error === "string") {
		return error;
	}
	return String(error);
};

const editKontenWeb = async (req: Request, res: Response) => {
	try {
		const { value } = req.body;
		const { component_id } = req.params;

		await kontenWebService.editKontenWeb(component_id, value);
		res.status(200).json({
			message: "Konten web berhasil di update",
			requestedData: { component_id, value },
		});
	} catch (error) {
		const errorMessage = getErrorMessage(error);
		console.error("Server error:", errorMessage);
		res.status(500).json({
			message: "Server Error",
			serverMessage: errorMessage,
		});
	}
};

const lihatSemuaKontenWeb = async (req: Request, res: Response) => {
	try {
		const data = await kontenWebService.lihatSemuaKontenWeb();
		res.status(200).json({
			message: "get components success",
			deletedData: data,
		});
	} catch (error) {
		const errorMessage = getErrorMessage(error);
		res.status(500).json({
			message: "Server Error",
			serverMessage: errorMessage,
		});
	}
};

const hapusKontenWeb = async (req: Request, res: Response) => {
	const { component_id } = req.params;
	try {
		const data = await kontenWebService.hapusKontenWeb(component_id);
		res.status(200).json({
			message: "delete component success",
			requestedData: data,
		});
	} catch (error) {
		const errorMessage = getErrorMessage(error);
		res.status(500).json({
			message: "Server Error",
			serverMessage: errorMessage,
		});
	}
};

export { lihatSemuaKontenWeb, editKontenWeb, hapusKontenWeb };
