import db from "../config/db";
import { KontenWeb } from "../types/prisma.d";

const lihatSemuaKontenWeb = async () => {
	try {
		const result = await db.konten_web.findMany();
		return result;
	} catch (error) {
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const editKontenWeb = async (konten_id: string, data: KontenWeb) => {
	try {
		const result = await db.konten_web.update({
			where: {
				konten_id,
			},
			data: {
				konten_value: data.konten_value,
			},
		});
		return result;
	} catch (error: any) {
		if (error.code === "P2025") {
			throw new Error(`Konten web dengan key '${konten_id}' tidak ditemukan.`);
		}
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

const hapusKontenWeb = async (konten_id: string) => {
	try {
		const result = await db.konten_web.delete({
			where: {
				konten_id,
			},
		});
		return result;
	} catch (error: any) {
		if (error.code === "P2025") {
			throw new Error(`Konten web dengan key '${konten_id}' tidak ditemukan.`);
		}
		console.error("Terjadi kesalahan di sisi server!", error);
		throw error;
	}
};

export default {
	lihatSemuaKontenWeb,
	editKontenWeb,
	hapusKontenWeb,
};
