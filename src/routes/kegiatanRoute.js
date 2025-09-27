import express from "express";
import { buatKegiatanBaru, lihatSemuaKegiatan, lihatSingleKegiatan, editKegiatan, hapusKegiatan } from "../controllers/kegiatanController.js";
import { validasiBuatKegiatan, validasiEditKegiatan, validasiHapusKegiatan } from "../validators/kegiatanValidator.js";
import { checkValidationResult } from "../middlewares/checkValidationResult.js";
const router = express.Router();

router.post("/add", validasiBuatKegiatan, buatKegiatanBaru);
router.get("/", lihatSemuaKegiatan);
router.get("/:id", lihatSingleKegiatan);
router.patch("/edit/:id", validasiEditKegiatan, checkValidationResult, editKegiatan);
router.delete("/delete/:id", validasiHapusKegiatan, checkValidationResult, hapusKegiatan);

export default router;
