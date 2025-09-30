/*
  Warnings:

  - You are about to drop the column `nama_kegiatan` on the `kegiatan` table. All the data in the column will be lost.
  - You are about to drop the column `guru_id` on the `prestasi` table. All the data in the column will be lost.
  - You are about to drop the column `penulis_user_id` on the `prestasi` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nama_kelas,level_id,ta_id]` on the table `kelas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nisn]` on the table `siswa` will be added. If there are existing duplicate values, this will fail.
  - Made the column `updated_at` on table `about` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `judul` to the `kegiatan` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('Laki-Laki', 'Perempuan');

-- DropForeignKey
ALTER TABLE "public"."about" DROP CONSTRAINT "about_ibfk_1";

-- DropForeignKey
ALTER TABLE "public"."prestasi" DROP CONSTRAINT "prestasi_guru_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."prestasi" DROP CONSTRAINT "prestasi_ibfk_1";

-- DropIndex
DROP INDEX "public"."prestasi_guru_id_index";

-- DropIndex
DROP INDEX "public"."prestasi_penulis_user_id_index";

-- AlterTable
ALTER TABLE "public"."about" ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."berita" ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "editor_user_id" INTEGER,
ADD COLUMN     "is_featured" BOOLEAN DEFAULT false,
ADD COLUMN     "is_published" BOOLEAN DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."kegiatan" DROP COLUMN "nama_kegiatan",
ADD COLUMN     "is_featured" BOOLEAN DEFAULT false,
ADD COLUMN     "judul" VARCHAR(255) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."pengumuman" ADD COLUMN     "konten_lengkap" TEXT;

-- AlterTable
ALTER TABLE "public"."prestasi" DROP COLUMN "guru_id",
DROP COLUMN "penulis_user_id",
ADD COLUMN     "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "usersUser_id" INTEGER;

-- AlterTable
ALTER TABLE "public"."siswa" ADD COLUMN     "alamat" TEXT,
ADD COLUMN     "jenis_kelamin" "public"."Gender",
ADD COLUMN     "nama_ayah" VARCHAR(150),
ADD COLUMN     "nama_ibu" VARCHAR(150),
ADD COLUMN     "nisn" VARCHAR(20);

-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "foto_profil_url" VARCHAR(255),
ADD COLUMN     "is_verified" BOOLEAN DEFAULT false,
ADD COLUMN     "jabatan" VARCHAR(100),
ADD COLUMN     "login_terakhir" TIMESTAMP(3),
ADD COLUMN     "nomor_telefon" VARCHAR(20),
ADD COLUMN     "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE INDEX "berita_editor_user_id_index" ON "public"."berita"("editor_user_id");

-- CreateIndex
CREATE INDEX "berita_kategori_id_index" ON "public"."berita"("kategori_id");

-- CreateIndex
CREATE INDEX "kegiatan_kategori_id_index" ON "public"."kegiatan"("kategori_id");

-- CreateIndex
CREATE UNIQUE INDEX "kelas_unique_per_ta" ON "public"."kelas"("nama_kelas", "level_id", "ta_id");

-- CreateIndex
CREATE UNIQUE INDEX "siswa_nisn_unique" ON "public"."siswa"("nisn");

-- AddForeignKey
ALTER TABLE "public"."about" ADD CONSTRAINT "about_ibfk_1" FOREIGN KEY ("editor_user_id") REFERENCES "public"."users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."berita" ADD CONSTRAINT "berita_kategori_id_fkey" FOREIGN KEY ("kategori_id") REFERENCES "public"."kategori_berita"("kategori_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."berita" ADD CONSTRAINT "berita_editor_user_id_fkey" FOREIGN KEY ("editor_user_id") REFERENCES "public"."users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."kegiatan" ADD CONSTRAINT "kegiatan_kategori_id_fkey" FOREIGN KEY ("kategori_id") REFERENCES "public"."kategori_kegiatan"("kategori_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."prestasi" ADD CONSTRAINT "prestasi_usersUser_id_fkey" FOREIGN KEY ("usersUser_id") REFERENCES "public"."users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
