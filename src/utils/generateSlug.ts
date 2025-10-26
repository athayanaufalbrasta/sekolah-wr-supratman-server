import slugify from "slugify";

type UuidV4Function = () => string;

let uuidV4: UuidV4Function | null = null;

import("uuid")
	.then((mod) => {
		uuidV4 = mod.v4 as UuidV4Function;
	})
	.catch((e) => console.error("Gagal memuat uuid:", e));

/**
 * Membuat slug dasar (base slug) dari judul setelah memotongnya
 * ke panjang karakter tertentu untuk tujuan SEO dan keterbacaan URL.
 * * Fungsi ini tidak melakukan pengecekan keunikan di database.
 * * @param {string} title - Judul berita yang akan diubah menjadi slug.
 * @returns {string} Slug dasar yang sudah dibersihkan dan dipotong (e.g., "judul-berita").
 */
export function generateSlug(title: string): string {
	if (!uuidV4) {
		console.warn("UUID belum dimuat, menggunakan slug tanpa unik ID.");
		return slugify(title.substring(0, 150), { lower: true, strict: true, locale: "id" }) + "-temp";
	}

	const MAX_SLUG_LENGTH = 150;
	if (!title || typeof title !== "string") {
		return "";
	}

	const truncatedTitle = title.substring(0, MAX_SLUG_LENGTH);
	const baseSlug = slugify(truncatedTitle, {
		lower: true,
		strict: true,
		locale: "id",
	});

	const uniqueSuffix = uuidV4();

	return (baseSlug ? baseSlug : "untitled-post") + "-" + uniqueSuffix;
}
