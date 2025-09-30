import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
	const PLACEHOLDER_HASH = "$2a$10$abcdefghijklmnopqrstuvwxyz1234567890.";

	// --- 1. DATA MASTER (Tidak memiliki Foreign Key) ---
	console.log("==================================================");
	console.log("Memulai seeding data master (Level 1)...");

	const roleData = [
		{ role_id: 1, nama_role: "Administrator" },
		{ role_id: 2, nama_role: "Guru" },
		{ role_id: 3, nama_role: "Siswa" },
		{ role_id: 4, nama_role: "Tata Usaha" },
		{ role_id: 5, nama_role: "Kepala Sekolah" },
		{ role_id: 6, nama_role: "Orang Tua" },
	];

	const jenjangData = [
		{ jenjang_id: 1, nama_jenjang: "Sekolah Dasar", kode_jenjang: "SD" },
		{ jenjang_id: 2, nama_jenjang: "Sekolah Menengah Pertama", kode_jenjang: "SMP" },
		{ jenjang_id: 3, nama_jenjang: "Sekolah Menengah Atas", kode_jenjang: "SMA" },
		{ jenjang_id: 4, nama_jenjang: "Sekolah Menengah Kejuruan", kode_jenjang: "SMK" },
		{ jenjang_id: 5, nama_jenjang: "Taman Kanak-Kanak", kode_jenjang: "TK" },
	];

	const kategoriBeritaData = [
		{ kategori_id: 1, nama_kategori: "Akademik", deskripsi: "Informasi seputar pelajaran dan kurikulum." },
		{ kategori_id: 2, nama_kategori: "Kesiswaan", deskripsi: "Informasi seputar kegiatan dan peraturan siswa." },
		{ kategori_id: 3, nama_kategori: "Umum", deskripsi: "Pengumuman dan berita umum sekolah." },
		{ kategori_id: 4, nama_kategori: "Prestasi", deskripsi: "Pencapaian siswa dan guru dalam berbagai bidang." },
		{ kategori_id: 5, nama_kategori: "Ekstrakurikuler", deskripsi: "Informasi seputar klub dan kegiatan non-akademik." },
	];

	const kategoriKegiatanData = [
		{ kategori_id: 1, nama_kategori: "Olah Raga", deskripsi: "Kompetisi dan latihan olahraga." },
		{ kategori_id: 2, nama_kategori: "Seni dan Budaya", deskripsi: "Acara pentas seni dan kegiatan budaya." },
		{ kategori_id: 3, nama_kategori: "Sosial", deskripsi: "Kegiatan bakti sosial dan kemasyarakatan." },
		{ kategori_id: 4, nama_kategori: "Pendidikan", deskripsi: "Workshop, seminar, dan pelatihan guru." },
		{ kategori_id: 5, nama_kategori: "Peringatan Hari Besar", deskripsi: "Perayaan hari-hari nasional dan keagamaan." },
	];

	const tahunAjaranData = [
		{ ta_id: 1, tahun_mulai: 2023, tahun_selesai: 2024, semester: "Ganjil", is_aktif: false },
		{ ta_id: 2, tahun_mulai: 2023, tahun_selesai: 2024, semester: "Genap", is_aktif: false },
		{ ta_id: 3, tahun_mulai: 2024, tahun_selesai: 2025, semester: "Ganjil", is_aktif: true }, // TA Aktif
		{ ta_id: 4, tahun_mulai: 2024, tahun_selesai: 2025, semester: "Genap", is_aktif: false },
		{ ta_id: 5, tahun_mulai: 2025, tahun_selesai: 2026, semester: "Ganjil", is_aktif: false },
	];

	const usersData = [
		{ user_id: 1, role_id: 1, username: "adminsekolah", email: "admin@sekolah.edu", nama_lengkap: "Budi Santoso (Admin)", password_hash: PLACEHOLDER_HASH },
		{
			user_id: 2,
			role_id: 2,
			username: "gurumatematika",
			email: "siti.guru@sekolah.edu",
			nama_lengkap: "Siti Aisyah (Guru MTK)",
			password_hash: PLACEHOLDER_HASH,
		},
		{ user_id: 3, role_id: 3, username: "joko.susilo", email: "joko@siswa.edu", nama_lengkap: "Joko Susilo", password_hash: PLACEHOLDER_HASH },
		{ user_id: 4, role_id: 4, username: "tatausaha", email: "tu@sekolah.edu", nama_lengkap: "Rina Dewi (TU)", password_hash: PLACEHOLDER_HASH },
		{ user_id: 5, role_id: 2, username: "guruipa", email: "doni.guru@sekolah.edu", nama_lengkap: "Doni Prasetyo (Guru IPA)", password_hash: PLACEHOLDER_HASH }, // Guru tambahan
		{ user_id: 6, role_id: 3, username: "maya.lestari", email: "maya@siswa.edu", nama_lengkap: "Maya Lestari", password_hash: PLACEHOLDER_HASH },
		{ user_id: 7, role_id: 5, username: "kepsek", email: "kepsek@sekolah.edu", nama_lengkap: "Dr. Agung Baskoro (Kepsek)", password_hash: PLACEHOLDER_HASH },
	];

	const kontenWebData = [
		{ konten_id: 1, konten_key: "SITE_TITLE", konten_value: "Portal Sekolah Cerdas" },
		{ konten_id: 2, konten_key: "CONTACT_EMAIL", konten_value: "info@sekolahcerdas.edu" },
		{ konten_id: 3, konten_key: "ADDRESS", konten_value: "Jl. Pendidikan No. 10, Jakarta Pusat" },
		{ konten_id: 4, konten_key: "VISI_MISI_SINGKAT", konten_value: "Menjadi sekolah unggul berbasis teknologi dan karakter." },
		{ konten_id: 5, konten_key: "FOOTER_TEXT", konten_value: "Hak Cipta © 2024 Sekolah Cerdas. All Rights Reserved." },
	];

	await prisma.role.createMany({ data: roleData, skipDuplicates: true });
	await prisma.jenjang.createMany({ data: jenjangData, skipDuplicates: true });
	await prisma.kategori_berita.createMany({ data: kategoriBeritaData, skipDuplicates: true });
	await prisma.kategori_kegiatan.createMany({ data: kategoriKegiatanData, skipDuplicates: true });
	await prisma.tahun_ajaran.createMany({ data: tahunAjaranData, skipDuplicates: true });
	await prisma.users.createMany({ data: usersData, skipDuplicates: true });
	await prisma.konten_web.createMany({ data: kontenWebData, skipDuplicates: true });
	console.log("Seeding data master selesai.");

	// --- 2. DATA RELASI LEVEL 2 (Memiliki FK ke Level 1) ---
	console.log("--------------------------------------------------");
	console.log("Memulai seeding data relasi (Level 2)...");

	// FK: jenjang_id
	const mataPelajaranData = [
		{ mapel_id: 1, jenjang_id: 3, nama_mapel: "Matematika Wajib", kode_mapel: "MW-SMA" },
		{ mapel_id: 2, jenjang_id: 3, nama_mapel: "Bahasa Inggris", kode_mapel: "BI-SMA" },
		{ mapel_id: 3, jenjang_id: 2, nama_mapel: "Ilmu Pengetahuan Alam", kode_mapel: "IPA-SMP" },
		{ mapel_id: 4, jenjang_id: 2, nama_mapel: "Bahasa Indonesia", kode_mapel: "BI-SMP" },
		{ mapel_id: 5, jenjang_id: 3, nama_mapel: "Fisika Peminatan", kode_mapel: "FIS-SMA" },
	];

	// FK: ta_id, level_id (jenjang_id), wali_kelas_id (user_id)
	const kelasData = [
		{ kelas_id: 1, ta_id: 3, level_id: 3, nama_kelas: "X-A", wali_kelas_id: 2 }, // SMA, TA Aktif, Wali: Siti Aisyah
		{ kelas_id: 2, ta_id: 3, level_id: 3, nama_kelas: "XI-IPA", wali_kelas_id: 5 }, // SMA, TA Aktif, Wali: Doni Prasetyo
		{ kelas_id: 3, ta_id: 3, level_id: 2, nama_kelas: "VIII-B", wali_kelas_id: 2 }, // SMP, TA Aktif, Wali: Siti Aisyah
		{ kelas_id: 4, ta_id: 1, level_id: 3, nama_kelas: "XII-IPA", wali_kelas_id: 5 }, // SMA, TA Lama, Wali: Doni Prasetyo
		{ kelas_id: 5, ta_id: 2, level_id: 2, nama_kelas: "IX-C", wali_kelas_id: 4 }, // SMP, TA Lama, Wali: Rina Dewi (TU)
	];

	// FK: user_id, jenjang_id
	const siswaData = [
		{ siswa_id: 1, user_id: 3, nis: "1201001", nisn: "0051234567", nama_lengkap: "Joko Susilo", jenjang_id: 3, tgl_lahir: new Date("2005-01-15") }, // SMA, User 3
		{ siswa_id: 2, user_id: 6, nis: "1201002", nisn: "0052345678", nama_lengkap: "Maya Lestari", jenjang_id: 3, tgl_lahir: new Date("2005-03-20") }, // SMA, User 6
		{ siswa_id: 3, user_id: null, nis: "1201003", nisn: "0053456789", nama_lengkap: "Adi Nugroho", jenjang_id: 3, tgl_lahir: new Date("2005-11-01") }, // SMA, Belum ada akun
		{ siswa_id: 4, user_id: null, nis: "0902001", nisn: "0081122334", nama_lengkap: "Bambang Pamungkas", jenjang_id: 2, tgl_lahir: new Date("2008-07-22") }, // SMP, Belum ada akun
		{ siswa_id: 5, user_id: null, nis: "0902002", nisn: "0082233445", nama_lengkap: "Citra Dewi", jenjang_id: 2, tgl_lahir: new Date("2008-02-10") }, // SMP, Belum ada akun
	];

	// FK: penulis_user_id (users), kategori_id (kategori_berita), editor_user_id (users)
	const beritaData = [
		{
			berita_id: 1,
			judul: "Pembukaan Tahun Ajaran Baru 2024/2025",
			slug: "pembukaan-ta-baru-2024",
			ringkasan: "Sekolah Cerdas menyambut TA baru dengan semangat baru.",
			konten_lengkap: "Detail lengkap tentang jadwal, registrasi ulang, dan orientasi siswa baru...",
			kategori_id: 3,
			gambar_utama: "url/gambar/pembukaan.jpg",
			tanggal_publikasi: new Date("2024-07-01T10:00:00Z"),
			penulis_user_id: 1,
			tags: "TA, Baru, Sekolah",
			views_count: 50,
			is_published: true,
		},
		{
			berita_id: 2,
			judul: "Workshop Kurikulum Merdeka bagi Guru",
			slug: "workshop-kurikulum-merdeka",
			ringkasan: "Pelatihan wajib bagi seluruh guru untuk implementasi kurikulum baru.",
			konten_lengkap: "Pelatihan diadakan selama 3 hari...",
			kategori_id: 1,
			gambar_utama: "url/gambar/workshop.jpg",
			tanggal_publikasi: new Date("2024-06-15T09:00:00Z"),
			penulis_user_id: 2,
			tags: "Guru, Kurikulum",
			views_count: 25,
			is_published: true,
		},
		{
			berita_id: 3,
			judul: "Hasil Seleksi Lomba Sains Nasional",
			slug: "hasil-seleksi-lomba-sains",
			ringkasan: "Dua siswa SMA berhasil lolos ke tingkat nasional.",
			konten_lengkap: "Selamat kepada Joko dan Maya yang akan mewakili sekolah...",
			kategori_id: 4,
			gambar_utama: "url/gambar/sains.jpg",
			tanggal_publikasi: new Date("2024-08-20T11:00:00Z"),
			penulis_user_id: 1,
			tags: "Prestasi, Sains, Siswa",
			views_count: 70,
			is_published: true,
		},
		{
			berita_id: 4,
			judul: "Jadwal Ujian Sekolah Akhir Semester",
			slug: "jadwal-ujian-akhir-semester",
			ringkasan: "Informasi penting mengenai pelaksanaan UAS.",
			konten_lengkap: "Pastikan Anda sudah melunasi biaya administrasi untuk mengikuti ujian...",
			kategori_id: 3,
			gambar_utama: "url/gambar/ujian.jpg",
			tanggal_publikasi: new Date("2024-11-01T14:00:00Z"),
			penulis_user_id: 4,
			tags: "Ujian, UAS, Jadwal",
			views_count: 45,
			is_published: true,
		},
		{
			berita_id: 5,
			judul: "Pendaftaran Klub Robotik Dibuka!",
			slug: "pendaftaran-klub-robotik",
			ringkasan: "Kesempatan bagi siswa SMP dan SMA untuk bergabung dalam klub robotik.",
			konten_lengkap: "Pertemuan pertama akan diadakan di lab komputer...",
			kategori_id: 5,
			gambar_utama: "url/gambar/robotik.jpg",
			tanggal_publikasi: new Date("2024-07-15T16:00:00Z"),
			penulis_user_id: 5,
			tags: "Ekskul, Robotik",
			views_count: 30,
			is_published: true,
		},
	];

	// FK: penulis_user_id (users), kategori_id (kategori_kegiatan)
	const kegiatanData = [
		{
			kegiatan_id: 1,
			judul: "Lomba Futsal Antar Kelas", // Perbaikan penamaan
			slug: "lomba-futsal-antar-kelas",
			tanggal_mulai: new Date("2024-10-10"),
			tanggal_selesai: new Date("2024-10-12"),
			lokasi: "Lapangan Utama Sekolah",
			deskripsi: "Mencari bibit unggul olahraga.",
			kategori_id: 1,
			gambar_utama: "url/gambar/futsal.jpg",
			status: "Akan_Datang",
			penulis_user_id: 1,
		},
		{
			kegiatan_id: 2,
			judul: "Pentas Seni Peringatan HUT RI", // Perbaikan penamaan
			slug: "pensi-hut-ri",
			tanggal_mulai: new Date("2024-08-17"),
			tanggal_selesai: new Date("2024-08-17"),
			lokasi: "Auditorium",
			deskripsi: "Menampilkan bakat seni siswa.",
			kategori_id: 2,
			gambar_utama: "url/gambar/pensi.jpg",
			status: "Selesai",
			penulis_user_id: 2,
		},
		{
			kegiatan_id: 3,
			judul: "Bakti Sosial ke Panti Asuhan", // Perbaikan penamaan
			slug: "baksos-panti-asuhan",
			tanggal_mulai: new Date("2024-09-05"),
			tanggal_selesai: null,
			lokasi: "Panti Asuhan Kasih Bunda",
			deskripsi: "Penggalangan dana dan kunjungan.",
			kategori_id: 3,
			gambar_utama: "url/gambar/baksos.jpg",
			status: "Berlangsung",
			penulis_user_id: 4,
		},
		{
			kegiatan_id: 4,
			judul: "Seminar Pendidikan Karakter", // Perbaikan penamaan
			slug: "seminar-pendidikan-karakter",
			tanggal_mulai: new Date("2024-11-20"),
			tanggal_selesai: null,
			lokasi: "Ruang Rapat Guru",
			deskripsi: "Peningkatan kualitas pengajaran.",
			kategori_id: 4,
			gambar_utama: "url/gambar/seminar.jpg",
			status: "Akan_Datang",
			penulis_user_id: 7,
		},
		{
			kegiatan_id: 5,
			judul: "Perayaan Hari Guru Nasional", // Perbaikan penamaan
			slug: "perayaan-hari-guru",
			tanggal_mulai: new Date("2024-11-25"),
			tanggal_selesai: new Date("2024-11-25"),
			lokasi: "Lapangan Upacara",
			deskripsi: "Upacara dan apresiasi untuk guru.",
			kategori_id: 5,
			gambar_utama: "url/gambar/hariguru.jpg",
			status: "Akan_Datang",
			penulis_user_id: 1,
		},
	];

	// FK: audiens_jenjang_id (jenjang), penulis_user_id (users)
	const pengumumanData = [
		{
			pengumuman_id: 1,
			judul: "Jadwal Ujian Tengah Semester Ganjil",
			pesan_singkat: "UTS Ganjil akan dimulai 20 Oktober 2024. Persiapkan diri Anda!",
			konten_lengkap: "Detail lengkap jadwal UTS untuk jenjang SMA telah dirilis. Silakan cek portal siswa.", // Tambahan
			tanggal_penting: new Date("2024-10-20"),
			is_sticky: true,
			masa_berlaku_sampai: new Date("2024-10-25T23:59:59Z"),
			audiens_jenjang_id: 3,
			penulis_user_id: 4,
		},
		{
			pengumuman_id: 2,
			judul: "Libur Kenaikan Kelas",
			pesan_singkat: "Libur dimulai tanggal 22 Juni 2024. Masuk kembali 15 Juli 2024.",
			konten_lengkap: "Pengumuman ini berlaku untuk semua jenjang (SD, SMP, SMA).", // Tambahan
			tanggal_penting: new Date("2024-06-22"),
			is_sticky: false,
			masa_berlaku_sampai: new Date("2024-07-15T00:00:00Z"),
			audiens_jenjang_id: null,
			penulis_user_id: 1, // Untuk semua jenjang
		},
		{
			pengumuman_id: 3,
			judul: "Pergantian Seragam Hari Jumat",
			pesan_singkat: "Mulai minggu depan, seragam Jumat adalah Batik.",
			konten_lengkap: "Khusus untuk siswa jenjang SMP.", // Tambahan
			tanggal_penting: new Date("2024-09-01"),
			is_sticky: false,
			masa_berlaku_sampai: null,
			audiens_jenjang_id: 2,
			penulis_user_id: 4, // Hanya SMP
		},
		{
			pengumuman_id: 4,
			judul: "Rapat Orang Tua Murid Kelas X",
			pesan_singkat: "Diadakan 5 Agustus 2024, wajib hadir.",
			konten_lengkap: "Rapat akan membahas program tahunan dan biaya operasional.", // Tambahan
			tanggal_penting: new Date("2024-08-05"),
			is_sticky: true,
			masa_berlaku_sampai: new Date("2024-08-06T00:00:00Z"),
			audiens_jenjang_id: 3,
			penulis_user_id: 7, // Kepsek
		},
		{
			pengumuman_id: 5,
			judul: "Ekskul Renang Ditunda",
			pesan_singkat: "Karena perbaikan kolam renang, ekskul ditunda 2 minggu.",
			konten_lengkap: "Mohon maaf atas ketidaknyamanan ini.", // Tambahan
			tanggal_penting: new Date("2024-07-25"),
			is_sticky: false,
			masa_berlaku_sampai: new Date("2024-08-10T00:00:00Z"),
			audiens_jenjang_id: 2,
			penulis_user_id: 5, // Guru IPA
		},
	];

	// FK: editor_user_id (users)
	const aboutData = [
		{
			about_id: 1,
			jenis_konten: "SEJARAH",
			judul: "Sejarah Sekolah",
			konten: "Sekolah Cerdas didirikan pada tahun 1990...",
			editor_user_id: 1,
			gambar_url: "url/about/sejarah.jpg",
		},
		{
			about_id: 2,
			jenis_konten: "VISI",
			judul: "Visi Kami",
			konten: "Menjadi lembaga pendidikan terdepan di Indonesia.",
			editor_user_id: 7,
			gambar_url: "url/about/visi.jpg",
		},
		{
			about_id: 3,
			jenis_konten: "MISI",
			judul: "Misi Utama",
			konten: "Melaksanakan proses belajar mengajar berbasis teknologi.",
			editor_user_id: 7,
			gambar_url: null,
		},
		{
			about_id: 4,
			jenis_konten: "FASILITAS",
			judul: "Fasilitas Sekolah",
			konten: "Kami memiliki lab komputer, lapangan olahraga, dan perpustakaan modern.",
			editor_user_id: 4,
			gambar_url: "url/about/fasilitas.jpg",
		},
		{
			about_id: 5,
			jenis_konten: "KEPALA_SEKOLAH",
			judul: "Sambutan Kepala Sekolah",
			konten: "Selamat datang di website resmi sekolah kami. Mari kita berkolaborasi...",
			editor_user_id: 7,
			gambar_url: "url/about/kepsek.jpg",
		},
	];

	await prisma.mata_pelajaran.createMany({ data: mataPelajaranData, skipDuplicates: true });
	await prisma.kelas.createMany({ data: kelasData, skipDuplicates: true });
	await prisma.siswa.createMany({ data: siswaData, skipDuplicates: true });
	await prisma.berita.createMany({ data: beritaData, skipDuplicates: true });
	await prisma.kegiatan.createMany({ data: kegiatanData, skipDuplicates: true });
	await prisma.pengumuman.createMany({ data: pengumumanData, skipDuplicates: true });
	await prisma.about.createMany({ data: aboutData, skipDuplicates: true });
	console.log("Seeding data relasi Level 2 selesai.");

	// --- 3. DATA RELASI LEVEL 3 (Memiliki FK ke Level 2) ---
	console.log("--------------------------------------------------");
	console.log("Memulai seeding data relasi (Level 3)...");

	// FK: siswa_id, mapel_id, kelas_id, ta_id, guru_id (users)
	const nilaiData = [
		{
			nilai_id: 1,
			siswa_id: 1,
			mapel_id: 1,
			kelas_id: 1,
			ta_id: 3,
			nilai_tugas: 85.0,
			nilai_uts: 95.0,
			nilai_uas: 90.0,
			nilai_akhir: 90.0,
			nilai_huruf: "A",
			deskripsi_rapor: "Sangat menguasai konsep aljabar dan kalkulus dasar.",
			guru_id: 2,
		}, // Joko, MTK, X-A, TA Ganjil 2024, Guru Siti
		{
			nilai_id: 2,
			siswa_id: 1,
			mapel_id: 2,
			kelas_id: 1,
			ta_id: 3,
			nilai_tugas: 80.0,
			nilai_uts: 88.0,
			nilai_uas: 90.0,
			nilai_akhir: 86.0,
			nilai_huruf: "B+",
			deskripsi_rapor: "Aktif dalam diskusi dan memiliki penguasaan kosakata yang baik.",
			guru_id: 5,
		}, // Joko, B.Inggris, X-A, TA Ganjil 2024, Guru Doni
		{
			nilai_id: 3,
			siswa_id: 4,
			mapel_id: 3,
			kelas_id: 3,
			ta_id: 3,
			nilai_tugas: 90.0,
			nilai_uts: 92.0,
			nilai_uas: 95.0,
			nilai_akhir: 92.0,
			nilai_huruf: "A",
			deskripsi_rapor: "Menunjukkan pemahaman mendalam tentang ekosistem dan fisika dasar.",
			guru_id: 5,
		}, // Bambang, IPA, VIII-B, TA Ganjil 2024, Guru Doni
		{
			nilai_id: 4,
			siswa_id: 2,
			mapel_id: 5,
			kelas_id: 2,
			ta_id: 3,
			nilai_tugas: 75.0,
			nilai_uts: 80.0,
			nilai_uas: 78.0,
			nilai_akhir: 77.0,
			nilai_huruf: "C+",
			deskripsi_rapor: "Perlu peningkatan dalam pemecahan masalah dinamika dan gerak.",
			guru_id: 2,
		}, // Maya, Fisika, XI-IPA, TA Ganjil 2024, Guru Siti
		{
			nilai_id: 5,
			siswa_id: 5,
			mapel_id: 4,
			kelas_id: 5,
			ta_id: 2,
			nilai_tugas: 90.0,
			nilai_uts: 90.0,
			nilai_uas: 90.0,
			nilai_akhir: 90.0,
			nilai_huruf: "A",
			deskripsi_rapor: "Mahir dalam menyusun karangan narasi dan memiliki tata bahasa yang sempurna.",
			guru_id: 2,
		}, // Citra, B.Indo, IX-C, TA Genap 2023, Guru Siti
	];

	// FK: siswa_id, ta_id, kelas_asal_id, kelas_tujuan_id, user_proses_id (users)
	const kenaikanKelasData = [
		{
			kenaikan_id: 1,
			siswa_id: 1,
			ta_id: 2,
			kelas_asal_id: 4,
			kelas_tujuan_id: 2,
			status_kenaikan: "Naik",
			keterangan: "Lulus ke kelas XI IPA dengan hasil memuaskan.",
			tanggal_proses: new Date("2024-06-21"),
			user_proses_id: 4,
		},
		{
			kenaikan_id: 2,
			siswa_id: 4,
			ta_id: 2,
			kelas_asal_id: 5,
			kelas_tujuan_id: 3,
			status_kenaikan: "Naik",
			keterangan: "Lulus ke kelas VIII B.",
			tanggal_proses: new Date("2024-06-21"),
			user_proses_id: 4,
		},
		{
			kenaikan_id: 3,
			siswa_id: 5,
			ta_id: 2,
			kelas_asal_id: 5,
			kelas_tujuan_id: null,
			status_kenaikan: "Tinggal",
			keterangan: "Tinggal di kelas IX C karena nilai B.Inggris di bawah KKM.",
			tanggal_proses: new Date("2024-06-21"),
			user_proses_id: 4,
		},
		{
			kenaikan_id: 4,
			siswa_id: 2,
			ta_id: 2,
			kelas_asal_id: 4,
			kelas_tujuan_id: 2,
			status_kenaikan: "Naik",
			keterangan: "Naik kelas.",
			tanggal_proses: new Date("2024-06-21"),
			user_proses_id: 4,
		},
		{
			kenaikan_id: 5,
			siswa_id: 3,
			ta_id: 2,
			kelas_asal_id: 4,
			kelas_tujuan_id: 2,
			status_kenaikan: "Naik",
			keterangan: "Naik kelas.",
			tanggal_proses: new Date("2024-06-21"),
			user_proses_id: 4,
		},
	];

	// FK: siswa_id
	const prestasiData = [
		{
			prestasi_id: 1,
			nama_prestasi: "Juara 1 Lomba Cepat Tepat Matematika",
			deskripsi: "Diraih pada tingkat Kabupaten.",
			tingkat: "Kabupaten",
			tahun: 2024,
			tanggal_perolehan: new Date("2024-09-10"),
			tipe_penerima: "Siswa",
			siswa_id: 1,
			gambar_sertifikat_url: "url/sertif/joko.jpg",
			is_published: true,
			// Karena guru_id dan penulis_user_id dihapus di schema terakhir, kita hapus di data
		},
		{
			prestasi_id: 2,
			nama_prestasi: "Guru Inovatif Nasional",
			deskripsi: "Pengembangan metode ajar interaktif.",
			tingkat: "Nasional",
			tahun: 2024,
			tanggal_perolehan: new Date("2024-05-20"),
			tipe_penerima: "Guru",
			siswa_id: null,
			gambar_sertifikat_url: "url/sertif/doni.jpg",
			is_published: true,
		},
		{
			prestasi_id: 3,
			nama_prestasi: "Sekolah Adiwiyata",
			deskripsi: "Penghargaan sekolah peduli lingkungan.",
			tingkat: "Provinsi",
			tahun: 2023,
			tanggal_perolehan: new Date("2023-12-12"),
			tipe_penerima: "Sekolah",
			siswa_id: null,
			gambar_sertifikat_url: "url/sertif/adiwiyata.jpg",
			is_published: true,
		},
		{
			prestasi_id: 4,
			nama_prestasi: "Medali Emas Olimpiade Sains",
			deskripsi: "Bidang Fisika.",
			tingkat: "Internasional",
			tahun: 2024,
			tanggal_perolehan: new Date("2024-11-15"),
			tipe_penerima: "Siswa",
			siswa_id: 2,
			gambar_sertifikat_url: "url/sertif/maya.jpg",
			is_published: false,
		},
		{
			prestasi_id: 5,
			nama_prestasi: "Juara 3 Turnamen E-Sport",
			deskripsi: "Lomba antar sekolah SMP.",
			tingkat: "Sekolah",
			tahun: 2024,
			tanggal_perolehan: new Date("2024-08-01"),
			tipe_penerima: "Siswa",
			siswa_id: 4,
			gambar_sertifikat_url: "url/sertif/esport.jpg",
			is_published: true,
		},
	];

	await prisma.nilai.createMany({ data: nilaiData, skipDuplicates: true });
	await prisma.kenaikan_kelas.createMany({ data: kenaikanKelasData, skipDuplicates: true });
	await prisma.prestasi.createMany({ data: prestasiData, skipDuplicates: true });
	console.log("Seeding data relasi Level 3 selesai.");
	console.log("==================================================");
	console.log("Seeding selesai. Semua data berhasil ditambahkan.");
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error("Gagal saat seeding:", e);
		await prisma.$disconnect();
		process.exit(1);
	});
