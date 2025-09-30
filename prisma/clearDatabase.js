import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function clearDatabase() {
	console.log("Memulai proses penghapusan data (TRUNCATE) semua tabel...");

	try {
		console.log("Menghapus data dari 'nilai'...");
		await prisma.nilai.deleteMany();

		console.log("Menghapus data dari 'berita'...");
		await prisma.berita.deleteMany();

		console.log("Menghapus data dari 'kegiatan'...");
		await prisma.kegiatan.deleteMany();

		console.log("Menghapus data dari 'pengumuman'...");
		await prisma.pengumuman.deleteMany();

		console.log("Menghapus data dari 'prestasi'...");
		await prisma.prestasi.deleteMany();

		console.log("Menghapus data dari 'kenaikan_kelas'...");
		await prisma.kenaikan_kelas.deleteMany();

		console.log("Menghapus data dari 'siswa'...");
		await prisma.siswa.deleteMany();

		console.log("Menghapus data dari 'kelas'...");
		await prisma.kelas.deleteMany();

		// === Hapus Tabel Master (Parent Tables) ===
		console.log("Menghapus data dari 'mata_pelajaran'...");
		await prisma.mata_pelajaran.deleteMany();

		console.log("Menghapus data dari 'about'...");
		await prisma.about.deleteMany();

		console.log("Menghapus data dari 'kategori_berita'...");
		await prisma.kategori_berita.deleteMany();

		console.log("Menghapus data dari 'kategori_kegiatan'...");
		await prisma.kategori_kegiatan.deleteMany();

		console.log("Menghapus data dari 'konten_web'...");
		await prisma.konten_web.deleteMany();

		console.log("Menghapus data dari 'jenjang'...");
		await prisma.jenjang.deleteMany();

		console.log("Menghapus data dari 'tahun_ajaran'...");
		await prisma.tahun_ajaran.deleteMany();

		console.log("Menghapus data dari 'users'...");
		await prisma.users.deleteMany();

		console.log("Menghapus data dari 'role'...");
		await prisma.role.deleteMany();

		console.log("✅ Semua data berhasil dikosongkan.");
	} catch (e) {
		console.error("❌ GAGAL MENGHAPUS DATA!", e);
		throw e;
	} finally {
		await prisma.$disconnect();
	}
}

clearDatabase();
