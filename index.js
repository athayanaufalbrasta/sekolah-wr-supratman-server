import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
import prisma from "./src/config/db.js";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerOptions from "./src/config/swaggerDef.js";

config();
const PORT = process.env.PORT || 3000;
const app = express();
const swaggerSpecs = swaggerJsdoc(swaggerOptions);

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
import beritaRoutes from "./src/routes/beritaRoute.js";
import kegiatanRoutes from "./src/routes/kegiatanRoute.js";
import pengumumanRoutes from "./src/routes/pengumumanRoute.js";
// import authRoutes from "./src/routes/authRoute.js";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use("/api/v1/berita", beritaRoutes);
app.use("/api/v1/kegiatan", kegiatanRoutes);
app.use("/api/v1/pengumuman", pengumumanRoutes);
// app.use("/api/v1/auth", authRoutes);

app.use((err, req, res, next) => {
	res.json({
		message: err.message,
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
		res.json({
			message: err.message,
		});
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
	console.log(`Dokumentasi API tersedia di http://localhost:${PORT}/api-docs`);
});

// export default app;
