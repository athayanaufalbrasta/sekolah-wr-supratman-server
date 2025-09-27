import express from "express";
import { buatBeritaBaru, lihatSemuaBerita, lihatSingleBerita, editBerita, hapusBerita } from "../controllers/beritaController.js";
import { validasiBuatBerita, validasiEditBerita, validasiHapusBerita } from "../validators/beritaValidator.js";
import { checkValidationResult } from "../middlewares/checkValidationResult.js";
const router = express.Router();

router.post("/add", validasiBuatBerita, buatBeritaBaru);
router.get("/", lihatSemuaBerita);
router.get("/:id", lihatSingleBerita);
router.patch("/edit/:id", validasiEditBerita, checkValidationResult, editBerita);
router.delete("/delete/:id", validasiHapusBerita, checkValidationResult, hapusBerita);

export default router;
