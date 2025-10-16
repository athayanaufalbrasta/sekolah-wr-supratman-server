import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

// Objek untuk menyimpan ID ASLI yang dihasilkan database
const actualIDs = {};
const PASS = await bcrypt.hash("rahasia123", 10); 

async function main() {
  console.log("==================================================");
  console.log("Memulai seeding data master (Level 1)...");

  // -----------------------------------------------------------------
  // 1. ROLE (PK Int - tetap createMany)
  // -----------------------------------------------------------------
  const roleData = [
    { role_id: 1, nama_role: "Administrator" },
    { role_id: 2, nama_role: "Guru" },
    { role_id: 3, nama_role: "Siswa" },
    { role_id: 4, nama_role: "Tata Usaha" },
    { role_id: 5, nama_role: "Kepala Sekolah" },
    { role_id: 6, nama_role: "Orang Tua" },
  ];
  await prisma.role.createMany({ data: roleData, skipDuplicates: true });
  
  // -----------------------------------------------------------------
  // 2. JENJANG (PK String - Mengambil ID dari database)
  // -----------------------------------------------------------------
  const jenjangSource = [
    { key: "SMA", nama_jenjang: "Sekolah Menengah Atas", kode_jenjang: "SMA" },
    { key: "SMP", nama_jenjang: "Sekolah Menengah Pertama", kode_jenjang: "SMP" },
    { key: "SD", nama_jenjang: "Sekolah Dasar", kode_jenjang: "SD" },
    { key: "SMK", nama_jenjang: "Sekolah Menengah Kejuruan", kode_jenjang: "SMK" },
    { key: "TK", nama_jenjang: "Taman Kanak-Kanak", kode_jenjang: "TK" },
  ];
  actualIDs.jnj = {};
  for (const item of jenjangSource) {
    const { key, ...dataToCreate } = item; // Memisahkan 'key' dari data
    const jenjang = await prisma.jenjang.create({ data: dataToCreate });
    actualIDs.jnj[key] = jenjang.jenjang_id;
  }
  
  // -----------------------------------------------------------------
  // 3. KATEGORI BERITA (PK String)
  // -----------------------------------------------------------------
  const kbSource = [
    { key: "AKADEMIK", nama_kategori: "Akademik", deskripsi: "Informasi seputar pelajaran dan kurikulum." },
    { key: "UMUM", nama_kategori: "Umum", deskripsi: "Pengumuman dan berita umum sekolah." },
    { key: "PRESTASI", nama_kategori: "Prestasi", deskripsi: "Pencapaian siswa dan guru dalam berbagai bidang." },
    { key: "EKSKUL", nama_kategori: "Ekstrakurikuler", deskripsi: "Informasi seputar klub dan kegiatan non-akademik." },
    { key: "KESISWAAN", nama_kategori: "Kesiswaan", deskripsi: "Informasi seputar kegiatan dan peraturan siswa." },
  ];
  actualIDs.kb = {};
  for (const item of kbSource) {
    const { key, ...dataToCreate } = item;
    const kat = await prisma.kategori_berita.create({ data: dataToCreate });
    actualIDs.kb[key] = kat.kategori_id;
  }

  // -----------------------------------------------------------------
  // 4. KATEGORI KEGIATAN (PK String)
  // -----------------------------------------------------------------
  const kkSource = [
    { key: "OR", nama_kategori: "Olah Raga", deskripsi: "Kompetisi dan latihan olahraga." },
    { key: "SENI", nama_kategori: "Seni dan Budaya", deskripsi: "Acara pentas seni dan kegiatan budaya." },
    { key: "SOSIAL", nama_kategori: "Sosial", deskripsi: "Kegiatan bakti sosial dan kemasyarakatan." },
    { key: "PENDIDIKAN", nama_kategori: "Pendidikan", deskripsi: "Workshop, seminar, dan pelatihan guru." },
    { key: "HARI_BESAR", nama_kategori: "Peringatan Hari Besar", deskripsi: "Perayaan hari-hari nasional dan keagamaan." },
  ];
  actualIDs.kk = {};
  for (const item of kkSource) {
    const { key, ...dataToCreate } = item;
    const kat = await prisma.kategori_kegiatan.create({ data: dataToCreate });
    actualIDs.kk[key] = kat.kategori_id;
  }

  // -----------------------------------------------------------------
  // 5. TAHUN AJARAN (PK String)
  // -----------------------------------------------------------------
  const taSource = [
    { key: "Ganjil_23", tahun_mulai: 2023, tahun_selesai: 2024, semester: "Ganjil", is_aktif: false },
    { key: "Genap_23", tahun_mulai: 2023, tahun_selesai: 2024, semester: "Genap", is_aktif: false },
    { key: "Ganjil_24", tahun_mulai: 2024, tahun_selesai: 2025, semester: "Ganjil", is_aktif: true },
    { key: "Genap_24", tahun_mulai: 2024, tahun_selesai: 2025, semester: "Genap", is_aktif: false },
    { key: "Ganjil_25", tahun_mulai: 2025, tahun_selesai: 2026, semester: "Ganjil", is_aktif: false },
  ];
  actualIDs.ta = {};
  for (const item of taSource) {
    const { key, ...dataToCreate } = item;
    const ta = await prisma.tahun_ajaran.create({ data: dataToCreate });
    actualIDs.ta[key] = ta.ta_id;
  }
  
  // -----------------------------------------------------------------
  // 6. USERS (PK String)
  // -----------------------------------------------------------------
  const userSource = [
    { key: "ADMIN", role_id: 1, username: "adminsekolah", email: "admin@sekolah.edu", nama_lengkap: "Budi Santoso (Admin)", password_hash: PASS },
    { key: "SITI_GURU", role_id: 2, username: "gurumatematika", email: "siti.guru@sekolah.edu", nama_lengkap: "Siti Aisyah (Guru MTK)", password_hash: PASS },
    { key: "JOKO_SISWA", role_id: 3, username: "joko.susilo", email: "joko@siswa.edu", nama_lengkap: "Joko Susilo", password_hash: PASS },
    { key: "RINA_TU", role_id: 4, username: "tatausaha", email: "tu@sekolah.edu", nama_lengkap: "Rina Dewi (TU)", password_hash: PASS },
    { key: "DONI_GURU", role_id: 2, username: "guruipa", email: "doni.guru@sekolah.edu", nama_lengkap: "Doni Prasetyo (Guru IPA)", password_hash: PASS },
    { key: "MAYA_SISWA", role_id: 3, username: "maya.lestari", email: "maya@siswa.edu", nama_lengkap: "Maya Lestari", password_hash: PASS },
    { key: "KEPSEK", role_id: 5, username: "kepsek", email: "kepsek@sekolah.edu", nama_lengkap: "Dr. Agung Baskoro (Kepsek)", password_hash: PASS },
    { key: "NOPAL", role_id: 1, username: "nopal", email: "athayanaufalbrasta@gmail.com", nama_lengkap: "Athaya Naufal Brasta", password_hash: PASS },
  ];
  actualIDs.usr = {};
  for (const item of userSource) {
    const { key, ...dataToCreate } = item;
    const user = await prisma.users.create({ data: dataToCreate });
    actualIDs.usr[key] = user.user_id;
  }

  // -----------------------------------------------------------------
  // 7. KONTEN WEB (PK String - Tidak perlu menyimpan ID)
  // -----------------------------------------------------------------
  const kwSource = [
    { konten_key: "SITE_TITLE", konten_value: "Portal Sekolah Cerdas" },
    { konten_key: "CONTACT_EMAIL", konten_value: "info@sekolahcerdas.edu" },
    { konten_key: "ADDRESS", konten_value: "Jl. Pendidikan No. 10, Jakarta Pusat" },
    { konten_key: "VISI_MISI_SINGKAT", konten_value: "Menjadi sekolah unggul berbasis teknologi dan karakter." },
    { konten_key: "FOOTER_TEXT", konten_value: "Hak Cipta © 2024 Sekolah Cerdas. All Rights Reserved." },
  ];
  await prisma.konten_web.createMany({ data: kwSource, skipDuplicates: true });

  console.log("Seeding data master selesai.");
  
  // -----------------------------------------------------------------
  // --- 2. DATA RELASI LEVEL 2 ---
  // -----------------------------------------------------------------
  console.log("--------------------------------------------------");
  console.log("Memulai seeding data relasi (Level 2)...");

  // 1. MATA PELAJARAN
  const mpSource = [
    { key: "MTK_SMA", jenjang_id: actualIDs.jnj.SMA, nama_mapel: "Matematika Wajib", kode_mapel: "MW-SMA" },
    { key: "BI_SMA", jenjang_id: actualIDs.jnj.SMA, nama_mapel: "Bahasa Inggris", kode_mapel: "BI-SMA" },
    { key: "IPA_SMP", jenjang_id: actualIDs.jnj.SMP, nama_mapel: "Ilmu Pengetahuan Alam", kode_mapel: "IPA-SMP" },
    { key: "BI_SMP", jenjang_id: actualIDs.jnj.SMP, nama_mapel: "Bahasa Indonesia", kode_mapel: "BI-SMP" },
    { key: "FISIKA_SMA", jenjang_id: actualIDs.jnj.SMA, nama_mapel: "Fisika Peminatan", kode_mapel: "FIS-SMA" },
  ];
  actualIDs.mp = {};
  for (const item of mpSource) {
    const { key, ...dataToCreate } = item;
    const mp = await prisma.mata_pelajaran.create({ data: dataToCreate });
    actualIDs.mp[key] = mp.mapel_id;
  }
  
  // 2. KELAS
  const klsSource = [
    { key: "XA", ta_id: actualIDs.ta.Ganjil_24, level_id: actualIDs.jnj.SMA, nama_kelas: "X-A", wali_kelas_id: actualIDs.usr.SITI_GURU },
    { key: "XIIPA", ta_id: actualIDs.ta.Ganjil_24, level_id: actualIDs.jnj.SMA, nama_kelas: "XI-IPA", wali_kelas_id: actualIDs.usr.DONI_GURU },
    { key: "VIIIB", ta_id: actualIDs.ta.Ganjil_24, level_id: actualIDs.jnj.SMP, nama_kelas: "VIII-B", wali_kelas_id: actualIDs.usr.SITI_GURU },
    { key: "XIIIPA_LAMA", ta_id: actualIDs.ta.Ganjil_23, level_id: actualIDs.jnj.SMA, nama_kelas: "XII-IPA (Lama)", wali_kelas_id: actualIDs.usr.DONI_GURU },
    { key: "IXC_LAMA", ta_id: actualIDs.ta.Genap_23, level_id: actualIDs.jnj.SMP, nama_kelas: "IX-C (Lama)", wali_kelas_id: actualIDs.usr.RINA_TU },
  ];
  actualIDs.kls = {};
  for (const item of klsSource) {
    const { key, ...dataToCreate } = item;
    const kls = await prisma.kelas.create({ data: dataToCreate });
    actualIDs.kls[key] = kls.kelas_id;
  }
  
  // 3. SISWA
  const siswaSource = [
    { key: "JOKO", user_id: actualIDs.usr.JOKO_SISWA, nis: "1201001", nisn: "0051234567", nama_lengkap: "Joko Susilo", jenjang_id: actualIDs.jnj.SMA, tgl_lahir: new Date("2005-01-15") },
    { key: "MAYA", user_id: actualIDs.usr.MAYA_SISWA, nis: "1201002", nisn: "0052345678", nama_lengkap: "Maya Lestari", jenjang_id: actualIDs.jnj.SMA, tgl_lahir: new Date("2005-03-20") },
    { key: "ADI", user_id: null, nis: "1201003", nisn: "0053456789", nama_lengkap: "Adi Nugroho", jenjang_id: actualIDs.jnj.SMA, tgl_lahir: new Date("2005-11-01") },
    { key: "BAMBANG", user_id: null, nis: "0902001", nisn: "0081122334", nama_lengkap: "Bambang Pamungkas", jenjang_id: actualIDs.jnj.SMP, tgl_lahir: new Date("2008-07-22") },
    { key: "CITRA", user_id: null, nis: "0902002", nisn: "0082233445", nama_lengkap: "Citra Dewi", jenjang_id: actualIDs.jnj.SMP, tgl_lahir: new Date("2008-02-10") },
  ];
  actualIDs.sis = {};
  for (const item of siswaSource) {
    const { key, ...dataToCreate } = item;
    const siswa = await prisma.siswa.create({ data: dataToCreate });
    actualIDs.sis[key] = siswa.siswa_id;
  }
  
  // 4. BERITA
  const beritaSource = [
    { key: "PEMBUKAAN", judul: "Pembukaan Tahun Ajaran Baru 2024/2025", slug: "pembukaan-ta-baru-2024", ringkasan: "Sekolah Cerdas menyambut TA baru.", konten_lengkap: "Detail lengkap...", kategori_id: actualIDs.kb.UMUM, tanggal_publikasi: new Date("2024-07-01T10:00:00Z"), penulis_user_id: actualIDs.usr.ADMIN, tags: "TA, Baru, Sekolah", views_count: 50, is_published: true, editor_user_id: null },
    { key: "WORKSHOP", judul: "Workshop Kurikulum Merdeka bagi Guru", slug: "workshop-kurikulum-merdeka", ringkasan: "Pelatihan wajib bagi seluruh guru.", konten_lengkap: "Pelatihan diadakan selama 3 hari...", kategori_id: actualIDs.kb.AKADEMIK, tanggal_publikasi: new Date("2024-06-15T09:00:00Z"), penulis_user_id: actualIDs.usr.SITI_GURU, tags: "Guru, Kurikulum", views_count: 25, is_published: true, editor_user_id: actualIDs.usr.ADMIN },
    { key: "LOMBA_SAINS", judul: "Hasil Seleksi Lomba Sains Nasional", slug: "hasil-seleksi-lomba-sains", ringkasan: "Dua siswa SMA berhasil lolos ke tingkat nasional.", konten_lengkap: "Selamat kepada Joko dan Maya...", kategori_id: actualIDs.kb.PRESTASI, tanggal_publikasi: new Date("2024-08-20T11:00:00Z"), penulis_user_id: actualIDs.usr.ADMIN, tags: "Prestasi, Sains, Siswa", views_count: 70, is_published: true, editor_user_id: null },
    { key: "UJIAN", judul: "Jadwal Ujian Sekolah Akhir Semester", slug: "jadwal-ujian-akhir-semester", ringkasan: "Informasi penting mengenai pelaksanaan UAS.", konten_lengkap: "Pastikan Anda sudah melunasi...", kategori_id: actualIDs.kb.UMUM, tanggal_publikasi: new Date("2024-11-01T14:00:00Z"), penulis_user_id: actualIDs.usr.RINA_TU, tags: "Ujian, UAS, Jadwal", views_count: 45, is_published: true, editor_user_id: null },
    { key: "ROBOTIK", judul: "Pendaftaran Klub Robotik Dibuka!", slug: "pendaftaran-klub-robotik", ringkasan: "Kesempatan bagi siswa SMP dan SMA.", konten_lengkap: "Pertemuan pertama...", kategori_id: actualIDs.kb.EKSKUL, tanggal_publikasi: new Date("2024-07-15T16:00:00Z"), penulis_user_id: actualIDs.usr.DONI_GURU, tags: "Ekskul, Robotik", views_count: 30, is_published: true, editor_user_id: null },
  ];
  actualIDs.br = {};
  for (const item of beritaSource) {
    const { key, ...dataToCreate } = item;
    const br = await prisma.berita.create({ data: dataToCreate });
    actualIDs.br[key] = br.berita_id;
  }

  // 5. KEGIATAN
  const kegiatanSource = [
    { key: "FUTSAL", judul: "Lomba Futsal Antar Kelas", slug: "lomba-futsal-antar-kelas", tanggal_mulai: new Date("2024-10-10"), tanggal_selesai: new Date("2024-10-12"), lokasi: "Lapangan Utama Sekolah", deskripsi: "Mencari bibit unggul olahraga.", kategori_id: actualIDs.kk.OR, status: "Akan_Datang", penulis_user_id: actualIDs.usr.ADMIN },
    { key: "PENSI", judul: "Pentas Seni Peringatan HUT RI", slug: "pensi-hut-ri", tanggal_mulai: new Date("2024-08-17"), tanggal_selesai: new Date("2024-08-17"), lokasi: "Auditorium", deskripsi: "Menampilkan bakat seni siswa.", kategori_id: actualIDs.kk.SENI, status: "Selesai", penulis_user_id: actualIDs.usr.SITI_GURU },
    { key: "BAKSOS", judul: "Bakti Sosial ke Panti Asuhan", slug: "baksos-panti-asuhan", tanggal_mulai: new Date("2024-09-05"), tanggal_selesai: null, lokasi: "Panti Asuhan Kasih Bunda", deskripsi: "Penggalangan dana dan kunjungan.", kategori_id: actualIDs.kk.SOSIAL, status: "Berlangsung", penulis_user_id: actualIDs.usr.RINA_TU },
    { key: "SEMINAR", judul: "Seminar Pendidikan Karakter", slug: "seminar-pendidikan-karakter", tanggal_mulai: new Date("2024-11-20"), tanggal_selesai: null, lokasi: "Ruang Rapat Guru", deskripsi: "Peningkatan kualitas pengajaran.", kategori_id: actualIDs.kk.PENDIDIKAN, status: "Akan_Datang", penulis_user_id: actualIDs.usr.KEPSEK },
    { key: "HARI_GURU", judul: "Perayaan Hari Guru Nasional", slug: "perayaan-hari-guru", tanggal_mulai: new Date("2024-11-25"), tanggal_selesai: new Date("2024-11-25"), lokasi: "Lapangan Upacara", deskripsi: "Upacara dan apresiasi untuk guru.", kategori_id: actualIDs.kk.HARI_BESAR, status: "Akan_Datang", penulis_user_id: actualIDs.usr.ADMIN },
  ];
  actualIDs.keg = {};
  for (const item of kegiatanSource) {
    const { key, ...dataToCreate } = item;
    const keg = await prisma.kegiatan.create({ data: dataToCreate });
    actualIDs.keg[key] = keg.kegiatan_id;
  }
  
  // 6. PENGUMUMAN
  const pengumumanSource = [
    { key: "UTS", judul: "Jadwal Ujian Tengah Semester Ganjil", pesan_singkat: "UTS Ganjil akan dimulai 20 Oktober 2024.", konten_lengkap: "Detail lengkap jadwal UTS...", tanggal_penting: new Date("2024-10-20"), is_sticky: true, masa_berlaku_sampai: new Date("2024-10-25T23:59:59Z"), audiens_jenjang_id: actualIDs.jnj.SMA, penulis_user_id: actualIDs.usr.RINA_TU },
    { key: "LIBUR", judul: "Libur Kenaikan Kelas", pesan_singkat: "Libur dimulai tanggal 22 Juni 2024.", konten_lengkap: "Pengumuman ini berlaku untuk semua jenjang...", tanggal_penting: new Date("2024-06-22"), is_sticky: false, masa_berlaku_sampai: new Date("2024-07-15T00:00:00Z"), audiens_jenjang_id: null, penulis_user_id: actualIDs.usr.ADMIN },
    { key: "SERAGAM", judul: "Pergantian Seragam Hari Jumat", pesan_singkat: "Mulai minggu depan, seragam Jumat adalah Batik.", konten_lengkap: "Khusus untuk siswa jenjang SMP.", tanggal_penting: new Date("2024-09-01"), is_sticky: false, masa_berlaku_sampai: null, audiens_jenjang_id: actualIDs.jnj.SMP, penulis_user_id: actualIDs.usr.RINA_TU },
    { key: "RAPAT", judul: "Rapat Orang Tua Murid Kelas X", pesan_singkat: "Diadakan 5 Agustus 2024, wajib hadir.", konten_lengkap: "Rapat akan membahas program tahunan...", tanggal_penting: new Date("2024-08-05"), is_sticky: true, masa_berlaku_sampai: new Date("2024-08-06T00:00:00Z"), audiens_jenjang_id: actualIDs.jnj.SMA, penulis_user_id: actualIDs.usr.KEPSEK },
    { key: "RENANG", judul: "Ekskul Renang Ditunda", pesan_singkat: "Karena perbaikan kolam renang, ekskul ditunda 2 minggu.", konten_lengkap: "Mohon maaf atas ketidaknyamanan ini...", tanggal_penting: new Date("2024-07-25"), is_sticky: false, masa_berlaku_sampai: new Date("2024-08-10T00:00:00Z"), audiens_jenjang_id: actualIDs.jnj.SMP, penulis_user_id: actualIDs.usr.DONI_GURU },
  ];
  actualIDs.pgm = {};
  for (const item of pengumumanSource) {
    const { key, ...dataToCreate } = item;
    const pgm = await prisma.pengumuman.create({ data: dataToCreate });
    actualIDs.pgm[key] = pgm.pengumuman_id;
  }

  // 7. ABOUT
  const aboutSource = [
    { key: "SEJARAH", jenis_konten: "SEJARAH", judul: "Sejarah Sekolah", konten: "Sekolah Cerdas didirikan pada tahun 1990...", editor_user_id: actualIDs.usr.ADMIN, gambar_url: "url/about/sejarah.jpg" },
    { key: "VISI", jenis_konten: "VISI", judul: "Visi Kami", konten: "Menjadi lembaga pendidikan terdepan di Indonesia.", editor_user_id: actualIDs.usr.KEPSEK, gambar_url: "url/about/visi.jpg" },
    { key: "MISI", jenis_konten: "MISI", judul: "Misi Utama", konten: "Melaksanakan proses belajar mengajar berbasis teknologi.", editor_user_id: actualIDs.usr.KEPSEK, gambar_url: null },
    { key: "FASILITAS", jenis_konten: "FASILITAS", judul: "Fasilitas Sekolah", konten: "Kami memiliki lab komputer, lapangan olahraga...", editor_user_id: actualIDs.usr.RINA_TU, gambar_url: "url/about/fasilitas.jpg" },
    { key: "KEPSEK", jenis_konten: "KEPALA_SEKOLAH", judul: "Sambutan Kepala Sekolah", konten: "Selamat datang di website resmi sekolah kami...", editor_user_id: actualIDs.usr.KEPSEK, gambar_url: "url/about/kepsek.jpg" },
  ];
  actualIDs.abt = {};
  for (const item of aboutSource) {
    const { key, ...dataToCreate } = item;
    const abt = await prisma.about.create({ data: dataToCreate });
    actualIDs.abt[key] = abt.about_id;
  }
  
  // 8. GALERI (Tidak ada FK masuk)
  const galleriesSource = [
    { folder_name: "banners", pic_name: "placeholder-image.jpg", caption: "Gambar untuk testing" },
  ];
  await prisma.galleries.createMany({ data: galleriesSource, skipDuplicates: true });


  console.log("Seeding data relasi Level 2 selesai.");
  
  // -----------------------------------------------------------------
  // --- 3. DATA RELASI LEVEL 3 (Menggunakan createMany untuk efisiensi) ---
  // -----------------------------------------------------------------
  console.log("--------------------------------------------------");
  console.log("Memulai seeding data relasi (Level 3)...");

  // 1. NILAI
  const nilaiSource = [
    { siswa_id: actualIDs.sis.JOKO, mapel_id: actualIDs.mp.MTK_SMA, kelas_id: actualIDs.kls.XA, ta_id: actualIDs.ta.Ganjil_24, nilai_tugas: 85.0, nilai_uts: 95.0, nilai_uas: 90.0, nilai_akhir: 90.0, nilai_huruf: "A", deskripsi_rapor: "Sangat menguasai konsep...", guru_id: actualIDs.usr.SITI_GURU },
    { siswa_id: actualIDs.sis.JOKO, mapel_id: actualIDs.mp.BI_SMA, kelas_id: actualIDs.kls.XA, ta_id: actualIDs.ta.Ganjil_24, nilai_tugas: 80.0, nilai_uts: 88.0, nilai_uas: 90.0, nilai_akhir: 86.0, nilai_huruf: "B+", deskripsi_rapor: "Aktif dalam diskusi...", guru_id: actualIDs.usr.DONI_GURU },
    { siswa_id: actualIDs.sis.BAMBANG, mapel_id: actualIDs.mp.IPA_SMP, kelas_id: actualIDs.kls.VIIIB, ta_id: actualIDs.ta.Ganjil_24, nilai_tugas: 90.0, nilai_uts: 92.0, nilai_uas: 95.0, nilai_akhir: 92.0, nilai_huruf: "A", deskripsi_rapor: "Menunjukkan pemahaman mendalam...", guru_id: actualIDs.usr.DONI_GURU },
    { siswa_id: actualIDs.sis.MAYA, mapel_id: actualIDs.mp.FISIKA_SMA, kelas_id: actualIDs.kls.XIIPA, ta_id: actualIDs.ta.Ganjil_24, nilai_tugas: 75.0, nilai_uts: 80.0, nilai_uas: 78.0, nilai_akhir: 77.0, nilai_huruf: "C+", deskripsi_rapor: "Perlu peningkatan...", guru_id: actualIDs.usr.SITI_GURU },
    { siswa_id: actualIDs.sis.CITRA, mapel_id: actualIDs.mp.BI_SMP, kelas_id: actualIDs.kls.IXC_LAMA, ta_id: actualIDs.ta.Genap_23, nilai_tugas: 90.0, nilai_uts: 90.0, nilai_uas: 90.0, nilai_akhir: 90.0, nilai_huruf: "A", deskripsi_rapor: "Mahir dalam menyusun karangan...", guru_id: actualIDs.usr.SITI_GURU },
  ];
  // Catatan: Model Nilai (PK String) tidak perlu loop create karena tidak ada FK dari Level 3 ke Nilai
  await prisma.nilai.createMany({ data: nilaiSource, skipDuplicates: true });

  // 2. KENAIKAN KELAS
  const kenaikanKelasSource = [
    { siswa_id: actualIDs.sis.JOKO, ta_id: actualIDs.ta.Genap_23, kelas_asal_id: actualIDs.kls.XIIIPA_LAMA, kelas_tujuan_id: actualIDs.kls.XIIPA, status_kenaikan: "Naik", keterangan: "Lulus ke kelas XI IPA...", tanggal_proses: new Date("2024-06-21"), user_proses_id: actualIDs.usr.RINA_TU },
    { siswa_id: actualIDs.sis.BAMBANG, ta_id: actualIDs.ta.Genap_23, kelas_asal_id: actualIDs.kls.IXC_LAMA, kelas_tujuan_id: actualIDs.kls.VIIIB, status_kenaikan: "Naik", keterangan: "Lulus ke kelas VIII B.", tanggal_proses: new Date("2024-06-21"), user_proses_id: actualIDs.usr.RINA_TU },
    { siswa_id: actualIDs.sis.CITRA, ta_id: actualIDs.ta.Genap_23, kelas_asal_id: actualIDs.kls.IXC_LAMA, kelas_tujuan_id: null, status_kenaikan: "Tinggal", keterangan: "Tinggal di kelas IX C...", tanggal_proses: new Date("2024-06-21"), user_proses_id: actualIDs.usr.RINA_TU },
    { siswa_id: actualIDs.sis.MAYA, ta_id: actualIDs.ta.Genap_23, kelas_asal_id: actualIDs.kls.XIIIPA_LAMA, kelas_tujuan_id: actualIDs.kls.XIIPA, status_kenaikan: "Naik", keterangan: "Naik kelas.", tanggal_proses: new Date("2024-06-21"), user_proses_id: actualIDs.usr.RINA_TU },
    { siswa_id: actualIDs.sis.ADI, ta_id: actualIDs.ta.Genap_23, kelas_asal_id: actualIDs.kls.XIIIPA_LAMA, kelas_tujuan_id: actualIDs.kls.XIIPA, status_kenaikan: "Naik", keterangan: "Naik kelas.", tanggal_proses: new Date("2024-06-21"), user_proses_id: actualIDs.usr.RINA_TU },
  ];
  await prisma.kenaikan_kelas.createMany({ data: kenaikanKelasSource, skipDuplicates: true });

  // 3. PRESTASI
  const prestasiSource = [
    { nama_prestasi: "Juara 1 Lomba Cepat Tepat Matematika", deskripsi: "Diraih pada tingkat Kabupaten.", tingkat: "Kabupaten", tahun: 2024, tanggal_perolehan: new Date("2024-09-10"), tipe_penerima: "Siswa", siswa_id: actualIDs.sis.JOKO, gambar_sertifikat_url: "url/sertif/joko.jpg", is_published: true, usersUser_id: null },
    { nama_prestasi: "Guru Inovatif Nasional", deskripsi: "Pengembangan metode ajar interaktif.", tingkat: "Nasional", tahun: 2024, tanggal_perolehan: new Date("2024-05-20"), tipe_penerima: "Guru", siswa_id: null, gambar_sertifikat_url: "url/sertif/doni.jpg", is_published: true, usersUser_id: actualIDs.usr.DONI_GURU },
    { nama_prestasi: "Sekolah Adiwiyata", deskripsi: "Penghargaan sekolah peduli lingkungan.", tingkat: "Provinsi", tahun: 2023, tanggal_perolehan: new Date("2023-12-12"), tipe_penerima: "Sekolah", siswa_id: null, gambar_sertifikat_url: "url/sertif/adiwiyata.jpg", is_published: true, usersUser_id: actualIDs.usr.KEPSEK },
    { nama_prestasi: "Medali Emas Olimpiade Sains", deskripsi: "Bidang Fisika.", tingkat: "Internasional", tahun: 2024, tanggal_perolehan: new Date("2024-11-15"), tipe_penerima: "Siswa", siswa_id: actualIDs.sis.MAYA, gambar_sertifikat_url: "url/sertif/maya.jpg", is_published: false, usersUser_id: null },
    { nama_prestasi: "Juara 3 Turnamen E-Sport", deskripsi: "Lomba antar sekolah SMP.", tingkat: "Sekolah", tahun: 2024, tanggal_perolehan: new Date("2024-08-01"), tipe_penerima: "Siswa", siswa_id: actualIDs.sis.BAMBANG, gambar_sertifikat_url: "url/sertif/esport.jpg", is_published: true, usersUser_id: null },
  ];
  await prisma.prestasi.createMany({ data: prestasiSource, skipDuplicates: true });

  console.log("Seeding data relasi Level 3 selesai.");
  console.log("==================================================");
  console.log("Seeding selesai. Semua data berhasil ditambahkan. 🎉");
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
