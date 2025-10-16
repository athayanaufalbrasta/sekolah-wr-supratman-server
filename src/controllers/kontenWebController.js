import kontenWebService from "../services/kontenWebService.js";

const editKontenWeb = async (req, res) => {
	try {
		const { value } = req.body;
		const { component_id } = req.params;

		await kontenWebService.editKontenWeb(component_id, value);
		res.status(200).json({
			message: "Konten web berhasil di update",
			requestedData: { component_id, value },
		});
	} catch (error) {
		console.error("Server error:", error);
		res.status(500).json({
			message: "Server Error",
			serverMessage: error.message,
		});
	}
};

const lihatSemuaKontenWeb = async (req, res) => {
	try {
		const data = await kontenWebService.lihatSemuaKontenWeb();
		res.status(200).json({
			message: "get components success",
			deletedData: data,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

const hapusKontenWeb = async (req, res) => {
	const { component_id } = req.params;
	try {
		const data = await kontenWebService.hapusKontenWeb(component_id);
		res.status(200).json({
			message: "get components success",
			requestedData: data,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			serverMessage: error,
		});
	}
};

export { lihatSemuaKontenWeb, editKontenWeb, hapusKontenWeb };
