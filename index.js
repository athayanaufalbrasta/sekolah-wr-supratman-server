import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
import cors from "cors";


config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use((err, req, res, next) => {
	res.json({
		message: err.message,
	});
});

app.get("/", async (req, res) => {
	res.json("Server is running!");
});


app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
