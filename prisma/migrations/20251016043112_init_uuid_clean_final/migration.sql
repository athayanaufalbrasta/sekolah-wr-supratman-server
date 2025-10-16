-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('Laki-Laki', 'Perempuan');

-- CreateEnum
CREATE TYPE "public"."prestasi_tingkat" AS ENUM ('Sekolah', 'Kabupaten', 'Provinsi', 'Nasional', 'Internasional');

-- CreateEnum
CREATE TYPE "public"."tahun_ajaran_semester" AS ENUM ('Ganjil', 'Genap');

-- CreateEnum
CREATE TYPE "public"."kenaikan_kelas_status_kenaikan" AS ENUM ('Naik', 'Lulus', 'Tinggal');

-- CreateEnum
CREATE TYPE "public"."prestasi_tipe_penerima" AS ENUM ('Siswa', 'Guru', 'Sekolah');

-- CreateEnum
CREATE TYPE "public"."kegiatan_status" AS ENUM ('Akan Datang', 'Berlangsung', 'Selesai', 'Dibatalkan');

-- CreateTable
CREATE TABLE "public"."role" (
    "role_id" SERIAL NOT NULL,
    "nama_role" VARCHAR(50) NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "public"."users" (
    "user_id" UUID NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "nama_lengkap" VARCHAR(255) NOT NULL,
    "role_id" INTEGER NOT NULL,
    "jabatan" VARCHAR(100),
    "is_aktif" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "nomor_telefon" VARCHAR(20),
    "login_terakhir" TIMESTAMP(3),
    "foto_profil_url" VARCHAR(255),
    "is_verified" BOOLEAN DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "public"."jenjang" (
    "jenjang_id" UUID NOT NULL,
    "nama_jenjang" VARCHAR(50) NOT NULL,
    "kode_jenjang" VARCHAR(10) NOT NULL,

    CONSTRAINT "jenjang_pkey" PRIMARY KEY ("jenjang_id")
);

-- CreateTable
CREATE TABLE "public"."tahun_ajaran" (
    "ta_id" UUID NOT NULL,
    "tahun_mulai" INTEGER NOT NULL,
    "tahun_selesai" INTEGER NOT NULL,
    "semester" "public"."tahun_ajaran_semester" NOT NULL,
    "is_aktif" BOOLEAN DEFAULT false,

    CONSTRAINT "tahun_ajaran_pkey" PRIMARY KEY ("ta_id")
);

-- CreateTable
CREATE TABLE "public"."mata_pelajaran" (
    "mapel_id" UUID NOT NULL,
    "nama_mapel" VARCHAR(150) NOT NULL,
    "kode_mapel" VARCHAR(10),
    "jenjang_id" UUID NOT NULL,

    CONSTRAINT "mata_pelajaran_pkey" PRIMARY KEY ("mapel_id")
);

-- CreateTable
CREATE TABLE "public"."kelas" (
    "kelas_id" UUID NOT NULL,
    "nama_kelas" VARCHAR(100) NOT NULL,
    "level_id" UUID NOT NULL,
    "ta_id" UUID NOT NULL,
    "wali_kelas_id" UUID,

    CONSTRAINT "kelas_pkey" PRIMARY KEY ("kelas_id")
);

-- CreateTable
CREATE TABLE "public"."siswa" (
    "siswa_id" UUID NOT NULL,
    "user_id" UUID,
    "nis" VARCHAR(20) NOT NULL,
    "nisn" VARCHAR(20),
    "jenis_kelamin" "public"."Gender",
    "nama_lengkap" VARCHAR(255) NOT NULL,
    "jenjang_id" UUID NOT NULL,
    "tgl_lahir" DATE,
    "alamat" TEXT,
    "nama_ayah" VARCHAR(150),
    "nama_ibu" VARCHAR(150),

    CONSTRAINT "siswa_pkey" PRIMARY KEY ("siswa_id")
);

-- CreateTable
CREATE TABLE "public"."nilai" (
    "nilai_id" UUID NOT NULL,
    "siswa_id" UUID NOT NULL,
    "mapel_id" UUID NOT NULL,
    "kelas_id" UUID NOT NULL,
    "ta_id" UUID NOT NULL,
    "nilai_tugas" DECIMAL(5,2),
    "nilai_uts" DECIMAL(5,2),
    "nilai_uas" DECIMAL(5,2),
    "nilai_akhir" DECIMAL(5,2) NOT NULL,
    "nilai_huruf" CHAR(2),
    "deskripsi_rapor" TEXT,
    "guru_id" UUID NOT NULL,
    "input_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "nilai_pkey" PRIMARY KEY ("nilai_id")
);

-- CreateTable
CREATE TABLE "public"."kenaikan_kelas" (
    "kenaikan_id" UUID NOT NULL,
    "siswa_id" UUID NOT NULL,
    "ta_id" UUID NOT NULL,
    "kelas_asal_id" UUID NOT NULL,
    "kelas_tujuan_id" UUID,
    "status_kenaikan" "public"."kenaikan_kelas_status_kenaikan" NOT NULL,
    "keterangan" TEXT,
    "tanggal_proses" DATE NOT NULL,
    "user_proses_id" UUID NOT NULL,

    CONSTRAINT "kenaikan_kelas_pkey" PRIMARY KEY ("kenaikan_id")
);

-- CreateTable
CREATE TABLE "public"."about" (
    "about_id" UUID NOT NULL,
    "jenis_konten" VARCHAR(50) NOT NULL,
    "judul" VARCHAR(255) NOT NULL,
    "konten" TEXT NOT NULL,
    "gambar_url" VARCHAR(255),
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "editor_user_id" UUID,

    CONSTRAINT "about_pkey" PRIMARY KEY ("about_id")
);

-- CreateTable
CREATE TABLE "public"."kategori_berita" (
    "kategori_id" UUID NOT NULL,
    "nama_kategori" VARCHAR(100) NOT NULL,
    "deskripsi" VARCHAR(255),

    CONSTRAINT "kategori_berita_pkey" PRIMARY KEY ("kategori_id")
);

-- CreateTable
CREATE TABLE "public"."berita" (
    "berita_id" UUID NOT NULL,
    "judul" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "ringkasan" TEXT,
    "konten_lengkap" TEXT NOT NULL,
    "kategori_id" UUID,
    "gambar_utama" VARCHAR(255),
    "tanggal_publikasi" TIMESTAMP(3) NOT NULL,
    "is_published" BOOLEAN DEFAULT true,
    "penulis_user_id" UUID NOT NULL,
    "tags" VARCHAR(255),
    "views_count" INTEGER DEFAULT 0,
    "is_featured" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "editor_user_id" UUID,

    CONSTRAINT "berita_pkey" PRIMARY KEY ("berita_id")
);

-- CreateTable
CREATE TABLE "public"."kategori_kegiatan" (
    "kategori_id" UUID NOT NULL,
    "nama_kategori" VARCHAR(100) NOT NULL,
    "deskripsi" VARCHAR(255),

    CONSTRAINT "kategori_kegiatan_pkey" PRIMARY KEY ("kategori_id")
);

-- CreateTable
CREATE TABLE "public"."kegiatan" (
    "kegiatan_id" UUID NOT NULL,
    "judul" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "tanggal_mulai" TIMESTAMP(3) NOT NULL,
    "tanggal_selesai" TIMESTAMP(3),
    "lokasi" VARCHAR(255) NOT NULL,
    "deskripsi" TEXT,
    "kategori_id" UUID,
    "gambar_utama" VARCHAR(255),
    "status" "public"."kegiatan_status" DEFAULT 'Akan Datang',
    "penulis_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "is_featured" BOOLEAN DEFAULT false,

    CONSTRAINT "kegiatan_pkey" PRIMARY KEY ("kegiatan_id")
);

-- CreateTable
CREATE TABLE "public"."pengumuman" (
    "pengumuman_id" UUID NOT NULL,
    "judul" VARCHAR(255) NOT NULL,
    "pesan_singkat" TEXT NOT NULL,
    "konten_lengkap" TEXT,
    "tanggal_penting" DATE,
    "is_sticky" BOOLEAN DEFAULT false,
    "masa_berlaku_sampai" TIMESTAMP(3),
    "audiens_jenjang_id" UUID,
    "penulis_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pengumuman_pkey" PRIMARY KEY ("pengumuman_id")
);

-- CreateTable
CREATE TABLE "public"."konten_web" (
    "konten_id" UUID NOT NULL,
    "konten_key" TEXT NOT NULL,
    "konten_value" TEXT,

    CONSTRAINT "konten_web_pkey" PRIMARY KEY ("konten_id")
);

-- CreateTable
CREATE TABLE "public"."galleries" (
    "pic_id" UUID NOT NULL,
    "folder_name" VARCHAR(255) NOT NULL,
    "pic_name" VARCHAR(255) NOT NULL,
    "caption" VARCHAR(255),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "galleries_pkey" PRIMARY KEY ("pic_id")
);

-- CreateTable
CREATE TABLE "public"."prestasi" (
    "prestasi_id" UUID NOT NULL,
    "nama_prestasi" VARCHAR(255) NOT NULL,
    "deskripsi" TEXT,
    "tingkat" "public"."prestasi_tingkat" NOT NULL,
    "tahun" INTEGER NOT NULL,
    "tanggal_perolehan" DATE,
    "tipe_penerima" "public"."prestasi_tipe_penerima" NOT NULL,
    "siswa_id" UUID,
    "gambar_sertifikat_url" VARCHAR(255),
    "is_published" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "usersUser_id" UUID,

    CONSTRAINT "prestasi_pkey" PRIMARY KEY ("prestasi_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "role_nama_role_unique" ON "public"."role"("nama_role");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_unique" ON "public"."users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_unique" ON "public"."users"("email");

-- CreateIndex
CREATE INDEX "users_role_id_index" ON "public"."users"("role_id");

-- CreateIndex
CREATE UNIQUE INDEX "jenjang_nama_jenjang_unique" ON "public"."jenjang"("nama_jenjang");

-- CreateIndex
CREATE UNIQUE INDEX "jenjang_kode_jenjang_unique" ON "public"."jenjang"("kode_jenjang");

-- CreateIndex
CREATE UNIQUE INDEX "tahun_ajaran_tahun_mulai_semester_unique" ON "public"."tahun_ajaran"("tahun_mulai", "semester");

-- CreateIndex
CREATE UNIQUE INDEX "mapel_kode_mapel_unique" ON "public"."mata_pelajaran"("kode_mapel");

-- CreateIndex
CREATE INDEX "mapel_jenjang_id_index" ON "public"."mata_pelajaran"("jenjang_id");

-- CreateIndex
CREATE INDEX "kelas_ta_id_index" ON "public"."kelas"("ta_id");

-- CreateIndex
CREATE INDEX "kelas_level_id_index" ON "public"."kelas"("level_id");

-- CreateIndex
CREATE INDEX "kelas_wali_kelas_id_index" ON "public"."kelas"("wali_kelas_id");

-- CreateIndex
CREATE UNIQUE INDEX "kelas_unique_per_ta" ON "public"."kelas"("nama_kelas", "level_id", "ta_id");

-- CreateIndex
CREATE UNIQUE INDEX "siswa_nis_unique" ON "public"."siswa"("nis");

-- CreateIndex
CREATE UNIQUE INDEX "siswa_nisn_unique" ON "public"."siswa"("nisn");

-- CreateIndex
CREATE INDEX "siswa_user_id_index" ON "public"."siswa"("user_id");

-- CreateIndex
CREATE INDEX "siswa_jenjang_id_index" ON "public"."siswa"("jenjang_id");

-- CreateIndex
CREATE INDEX "nilai_siswa_id_index" ON "public"."nilai"("siswa_id");

-- CreateIndex
CREATE INDEX "nilai_mapel_id_index" ON "public"."nilai"("mapel_id");

-- CreateIndex
CREATE INDEX "nilai_kelas_id_index" ON "public"."nilai"("kelas_id");

-- CreateIndex
CREATE INDEX "nilai_ta_id_index" ON "public"."nilai"("ta_id");

-- CreateIndex
CREATE INDEX "nilai_guru_id_index" ON "public"."nilai"("guru_id");

-- CreateIndex
CREATE UNIQUE INDEX "nilai_siswa_mapel_ta_unique" ON "public"."nilai"("siswa_id", "mapel_id", "ta_id");

-- CreateIndex
CREATE INDEX "kenaikan_kelas_user_proses_id_index" ON "public"."kenaikan_kelas"("user_proses_id");

-- CreateIndex
CREATE INDEX "kenaikan_kelas_siswa_id_index" ON "public"."kenaikan_kelas"("siswa_id");

-- CreateIndex
CREATE INDEX "kenaikan_kelas_ta_id_index" ON "public"."kenaikan_kelas"("ta_id");

-- CreateIndex
CREATE INDEX "kenaikan_kelas_kelas_asal_id_index" ON "public"."kenaikan_kelas"("kelas_asal_id");

-- CreateIndex
CREATE INDEX "kenaikan_kelas_kelas_tujuan_id_index" ON "public"."kenaikan_kelas"("kelas_tujuan_id");

-- CreateIndex
CREATE UNIQUE INDEX "about_jenis_konten_unique" ON "public"."about"("jenis_konten");

-- CreateIndex
CREATE INDEX "about_editor_user_id_index" ON "public"."about"("editor_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "kb_nama_kategori_unique" ON "public"."kategori_berita"("nama_kategori");

-- CreateIndex
CREATE UNIQUE INDEX "berita_slug_unique" ON "public"."berita"("slug");

-- CreateIndex
CREATE INDEX "berita_penulis_user_id_index" ON "public"."berita"("penulis_user_id");

-- CreateIndex
CREATE INDEX "berita_editor_user_id_index" ON "public"."berita"("editor_user_id");

-- CreateIndex
CREATE INDEX "berita_kategori_id_index" ON "public"."berita"("kategori_id");

-- CreateIndex
CREATE UNIQUE INDEX "kk_nama_kategori_unique" ON "public"."kategori_kegiatan"("nama_kategori");

-- CreateIndex
CREATE UNIQUE INDEX "kegiatan_slug_unique" ON "public"."kegiatan"("slug");

-- CreateIndex
CREATE INDEX "kegiatan_penulis_user_id_index" ON "public"."kegiatan"("penulis_user_id");

-- CreateIndex
CREATE INDEX "kegiatan_kategori_id_index" ON "public"."kegiatan"("kategori_id");

-- CreateIndex
CREATE INDEX "pengumuman_penulis_user_id_index" ON "public"."pengumuman"("penulis_user_id");

-- CreateIndex
CREATE INDEX "pengumuman_audiens_jenjang_id_index" ON "public"."pengumuman"("audiens_jenjang_id");

-- CreateIndex
CREATE INDEX "prestasi_siswa_id_index" ON "public"."prestasi"("siswa_id");

-- AddForeignKey
ALTER TABLE "public"."users" ADD CONSTRAINT "users_ibfk_1" FOREIGN KEY ("role_id") REFERENCES "public"."role"("role_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."mata_pelajaran" ADD CONSTRAINT "mata_pelajaran_ibfk_1" FOREIGN KEY ("jenjang_id") REFERENCES "public"."jenjang"("jenjang_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."kelas" ADD CONSTRAINT "kelas_level_id_fkey" FOREIGN KEY ("level_id") REFERENCES "public"."jenjang"("jenjang_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."kelas" ADD CONSTRAINT "kelas_wali_kelas_id_fkey" FOREIGN KEY ("wali_kelas_id") REFERENCES "public"."users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."kelas" ADD CONSTRAINT "kelas_ibfk_1" FOREIGN KEY ("ta_id") REFERENCES "public"."tahun_ajaran"("ta_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."siswa" ADD CONSTRAINT "siswa_ibfk_1" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."siswa" ADD CONSTRAINT "siswa_jenjang_id_fkey" FOREIGN KEY ("jenjang_id") REFERENCES "public"."jenjang"("jenjang_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."nilai" ADD CONSTRAINT "nilai_siswa_id_fkey" FOREIGN KEY ("siswa_id") REFERENCES "public"."siswa"("siswa_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."nilai" ADD CONSTRAINT "nilai_mapel_id_fkey" FOREIGN KEY ("mapel_id") REFERENCES "public"."mata_pelajaran"("mapel_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."nilai" ADD CONSTRAINT "nilai_kelas_id_fkey" FOREIGN KEY ("kelas_id") REFERENCES "public"."kelas"("kelas_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."nilai" ADD CONSTRAINT "nilai_ta_id_fkey" FOREIGN KEY ("ta_id") REFERENCES "public"."tahun_ajaran"("ta_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."nilai" ADD CONSTRAINT "nilai_guru_id_fkey" FOREIGN KEY ("guru_id") REFERENCES "public"."users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."kenaikan_kelas" ADD CONSTRAINT "kenaikan_kelas_ibfk_1" FOREIGN KEY ("user_proses_id") REFERENCES "public"."users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."kenaikan_kelas" ADD CONSTRAINT "kenaikan_kelas_siswa_id_fkey" FOREIGN KEY ("siswa_id") REFERENCES "public"."siswa"("siswa_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."kenaikan_kelas" ADD CONSTRAINT "kenaikan_kelas_ta_id_fkey" FOREIGN KEY ("ta_id") REFERENCES "public"."tahun_ajaran"("ta_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."kenaikan_kelas" ADD CONSTRAINT "kenaikan_kelas_kelas_asal_id_fkey" FOREIGN KEY ("kelas_asal_id") REFERENCES "public"."kelas"("kelas_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."kenaikan_kelas" ADD CONSTRAINT "kenaikan_kelas_kelas_tujuan_id_fkey" FOREIGN KEY ("kelas_tujuan_id") REFERENCES "public"."kelas"("kelas_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."about" ADD CONSTRAINT "about_ibfk_1" FOREIGN KEY ("editor_user_id") REFERENCES "public"."users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."berita" ADD CONSTRAINT "berita_kategori_id_fkey" FOREIGN KEY ("kategori_id") REFERENCES "public"."kategori_berita"("kategori_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."berita" ADD CONSTRAINT "berita_ibfk_1" FOREIGN KEY ("penulis_user_id") REFERENCES "public"."users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."berita" ADD CONSTRAINT "berita_editor_user_id_fkey" FOREIGN KEY ("editor_user_id") REFERENCES "public"."users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."kegiatan" ADD CONSTRAINT "kegiatan_ibfk_1" FOREIGN KEY ("penulis_user_id") REFERENCES "public"."users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."kegiatan" ADD CONSTRAINT "kegiatan_kategori_id_fkey" FOREIGN KEY ("kategori_id") REFERENCES "public"."kategori_kegiatan"("kategori_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."pengumuman" ADD CONSTRAINT "pengumuman_ibfk_1" FOREIGN KEY ("penulis_user_id") REFERENCES "public"."users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."pengumuman" ADD CONSTRAINT "pengumuman_audiens_jenjang_id_fkey" FOREIGN KEY ("audiens_jenjang_id") REFERENCES "public"."jenjang"("jenjang_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."prestasi" ADD CONSTRAINT "prestasi_siswa_id_fkey" FOREIGN KEY ("siswa_id") REFERENCES "public"."siswa"("siswa_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."prestasi" ADD CONSTRAINT "prestasi_usersUser_id_fkey" FOREIGN KEY ("usersUser_id") REFERENCES "public"."users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
