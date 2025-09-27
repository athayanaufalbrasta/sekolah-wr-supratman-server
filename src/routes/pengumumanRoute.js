import express from "express";
import { buatPengumumanBaru, lihatSemuaPengumuman, lihatSinglePengumuman, editPengumuman, hapusPengumuman } from "../controllers/pengumumanController.js";
import { validasiBuatPengumuman, validasiEditPengumuman, validasiHapusPengumuman } from "../validators/pengumumanValidator.js";
import { checkValidationResult } from "../middlewares/checkValidationResult.js";
const router = express.Router();

router.post("/add", validasiBuatPengumuman, buatPengumumanBaru);
router.get("/", lihatSemuaPengumuman);
router.get("/:id", lihatSinglePengumuman);
router.patch("/edit/:id", validasiEditPengumuman, checkValidationResult, editPengumuman);
router.delete("/delete/:id", validasiHapusPengumuman, checkValidationResult, hapusPengumuman);

export default router;
