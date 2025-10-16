import slugify from "slugify";
import { v4 as uuid } from "uuid";

/**
 * Membuat slug dasar (base slug) dari judul setelah memotongnya
 * ke panjang karakter tertentu untuk tujuan SEO dan keterbacaan URL.
 * * Fungsi ini tidak melakukan pengecekan keunikan di database.
 * * @param {string} title - Judul berita yang akan diubah menjadi slug.
 * @returns {string} Slug dasar yang sudah dibersihkan dan dipotong (e.g., "judul-berita").
 */
export function generateSlug(title) {
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

	return baseSlug + "-" + uuid() || "untitled-post-" + uuid();
}
