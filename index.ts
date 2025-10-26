import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import { config } from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import session_middleware from "./src/middlewares/session_server";

// Import rute dan middleware
import beritaRoutes from "./src/routes/beritaRoute";
import kegiatanRoutes from "./src/routes/kegiatanRoute";
import pengumumanRoutes from "./src/routes/pengumumanRoute";
import authRoutes from "./src/routes/authRoute";
import siswaRoutes from "./src/routes/siswaRoute";
import userRoutes from "./src/routes/userRoute";
import kontenWebRoutes from "./src/routes/kontenWebRoute";
import authenticateJWT from "./src/middlewares/jwtVerification";
// import fileUploadRoutes from "../temp/fileUploadRoute";

import swaggerDocument from "./src/config/swagger-output.json";

config();
const PORT = process.env.PORT || 3000;
const app = express();
console.log("NODE_ENV :", process.env.NODE_ENV);

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
		optionsSuccessStatus: 200,
	})
);

// ROUTES
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1/berita", beritaRoutes);
app.use("/api/v1/kegiatan", kegiatanRoutes);
app.use("/api/v1/pengumuman", pengumumanRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/siswa", authenticateJWT, siswaRoutes);
app.use("/api/v1/users", authenticateJWT, userRoutes);
app.use("/api/v1/konten-web", kontenWebRoutes);
// app.use("/api/v1/galleries", fileUploadRoutes);

// STATIC FILES DARI FOLDER PUBLIC (Jika diperlukan, uncomment dan perbaiki path)
// import path from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use("/images", express.static(path.join(__dirname, "./public/images")));
// app.use("/banners", express.static(path.join(__dirname, "./public/banners")));
// app.use("/konten-web", express.static(path.join(__dirname, "./public/keb_contents")));

// Error Handler Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error(err.stack);
	res.status(500).json({
		message: err.message,
		error: process.env.NODE_ENV === "production" ? {} : err,
	});
});

app.get("/", async (req: Request, res: Response) => {
	res.json("Server is running!");
});

// SERVERLESS
if (process.env.NODE_ENV !== "production") {
	app.listen(PORT, () => {
		console.log(`Server is running on http://localhost:${PORT}`);
		console.log(`Dokumentasi API tersedia di http://localhost:${PORT}/api-docs`);
	});
}

export default app;
