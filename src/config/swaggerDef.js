import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ROOT_PROJECT_PATH = path.join(__dirname, "..", "docs");

const swaggerOptions = {
	swaggerDefinition: {
		openapi: "3.0.0",
		info: {
			title: "WR Supratman API",
			version: "1.0.0",
			description: "Dokumentasi API untuk website Perguruan WR Supratman Medan",
		},
		servers: [
			{
				url: `http://localhost:3000`,
			},
		],
	},
	apis: [
		path.join(ROOT_PROJECT_PATH, "kegiatanDocs.js"),
		path.join(ROOT_PROJECT_PATH, "beritaDocs.js"),
		path.join(ROOT_PROJECT_PATH, "pengumumanDocs.js"),
		path.join(ROOT_PROJECT_PATH, "userDocs.js"),
		path.join(ROOT_PROJECT_PATH, "authDocs.js"),
		path.join(ROOT_PROJECT_PATH, "siswaDocs.js"),
	],
};
export default swaggerOptions;
