import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import prisma from "./src/config/db.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import session_middleware from "./src/middlewares/session_server.js";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config();
const PORT = process.env.PORT || 3000;
const app = express();

import swaggerDocument from "./src/config/swagger-output.json" with { type: "json" };

// MIDDLEWARES
app.use(morgan("dev"));
app.use(session_middleware);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	cors({
		origin: ["http://localhost:5173", "https://wr-supratman-server.vercel.app"],
		credentials: true,
		methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
		allowedHeaders: ["Content-Type", "Authorization", "X-CSRF-Token"],
	})
);

// ROUTES
import beritaRoutes from "./src/routes/beritaRoute.js";
import kegiatanRoutes from "./src/routes/kegiatanRoute.js";
import pengumumanRoutes from "./src/routes/pengumumanRoute.js";
import authRoutes from "./src/routes/authRoute.js";
// import siswaRoutes from "./src/routes/siswaRoute.js";
// import userRoutes from "./src/routes/userRoute.js";
// import kontenWebRoutes from "./src/routes/kontenWebRoute.js";
// import authenticateJWT from "./src/middlewares/jwtVerification.js";
import fileUploadRoutes from "./src/routes/fileUploadRoute.js";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1/berita", beritaRoutes);
app.use("/api/v1/kegiatan", kegiatanRoutes);
app.use("/api/v1/pengumuman", pengumumanRoutes);
app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/siswa", authenticateJWT, siswaRoutes);
// app.use("/api/v1/users", authenticateJWT, userRoutes);
// app.use("/api/v1/konten-web", kontenWebRoutes);
app.use("/api/v1/galleries", fileUploadRoutes);

// STATIC FILES FROM PUBLIC FOLDER
// app.use("/images", express.static(path.join(__dirname, "./public/images")));
// app.use("/banners", express.static(path.join(__dirname, "./public/banners")));
// app.use("/konten-web", express.static(path.join(__dirname, "./public/keb_contents")));

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
