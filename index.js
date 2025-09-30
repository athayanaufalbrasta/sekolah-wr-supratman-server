import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerOptions from "./src/config/swaggerDef.js";
import prisma from "./src/config/db.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import session_middleware from "./src/middlewares/session_server.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config();
const PORT = process.env.PORT || 3000;
const app = express();

const swaggerSpecs = swaggerJsdoc(swaggerOptions);

// MIDDLEWARES
app.use(morgan("dev"));
app.use(session_middleware);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// ROUTES
import beritaRoutes from "./src/routes/beritaRoute.js";
import kegiatanRoutes from "./src/routes/kegiatanRoute.js";
import pengumumanRoutes from "./src/routes/pengumumanRoute.js";
import authRoutes from "./src/routes/authRoute.js";
// import siswaRoutes from "./src/routes/siswaRoute.js";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs, { explorer: true }));
app.use("/api/v1/berita", beritaRoutes);
app.use("/api/v1/kegiatan", kegiatanRoutes);
app.use("/api/v1/pengumuman", pengumumanRoutes);
app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/siswa", siswaRoutes);

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({
		message: err.message,
		error: process.env.NODE_ENV === "production" ? {} : err,
	});
});

app.get("/", async (req, res) => {
	res.json("Server is running!");
});

app.get("/test-db", async (req, res) => {
	try {
		const result = await prisma.konten_web.findFirst({
			where: {
				konten_key: "test_db",
			},
		});
		res.json(result);
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});

// SERVERLESS
if (process.env.NODE_ENV !== "production") {
	app.listen(PORT, () => {
		console.log(`Server is running on http://localhost:${PORT}`);
		console.log(`Dokumentasi API tersedia di http://localhost:${PORT}/api-docs`);
	});
}

export default app;
