export interface Role {
	role_id: number;
	nama_role: string;
}

export interface RolePermission {
	role_id: number;
	permission_id: number;
}

export interface Permission {
	permission_id: number;
	nama_permission: string;
	grup: PermissionGrup | null;
}

export interface Users {
	user_id: string;
	username: string;
	email: string;
	password_hash: string;
	nama_lengkap: string;
	role_id: number;
	jabatan?: string | null;
	is_aktif?: boolean | null;
	created_at?: Date | null;
	updated_at?: Date | null;
	nomor_telefon?: string | null;
	login_terakhir?: Date | null;
	foto_profil_url?: string | null;
	is_verified?: boolean | null;
}

export interface Jenjang {
	jenjang_id: string;
	nama_jenjang: string;
	kode_jenjang: string;
}

export interface TahunAjaran {
	ta_id: string;
	tahun_mulai: number;
	tahun_selesai: number;
	semester: TahunAjaranSemester;
	is_aktif?: boolean | null;
}

export interface MataPelajaran {
	mapel_id: string;
	nama_mapel: string;
	kode_mapel?: string | null;
	jenjang_id: string;
}

export interface Kelas {
	kelas_id: string;
	nama_kelas: string;
	level_id: string;
	ta_id: string;
	wali_kelas_id?: string | null;
}

export interface Siswa {
	siswa_id: string;
	nis: string;
	nisn?: string | null;
	nama_lengkap: string;
	jenis_kelamin?: Gender | null;
	jenjang_id: string;
	tempat_lahir?: string | null;
	tgl_lahir?: Date | null;
	agama?: Agama | null;
	gol_darah?: GolDarah | null;
	anak_ke?: number | null;
	jumlah_saudara?: number | null;
	alamat?: string | null;
}

export interface DokumenSiswa {
	dokumen_siswa_id: string;
	siswa_id: string;
	nama_dokumen: string;
	file: string;
	jenis_dokumen: JenisDokumen;
}

export interface OrangTua {
	orang_tua_id: string;
	siswa_id: string;
	nama: string;
	tempat_lahir?: string | null;
	tgl_lahir?: Date | null;
	agama?: Agama | null;
	pendidikan_tertinggi?: string | null;
	alamat?: string | null;
	pekerjaan?: string | null;
	nomor_hp?: string | null;
}

export interface Nilai {
	nilai_id: string;
	siswa_id: string;
	mapel_id: string;
	kelas_id: string;
	ta_id: string;
	nilai_tugas?: number | null;
	nilai_uts?: number | null;
	nilai_uas?: number | null;
	nilai_akhir: number;
	nilai_huruf?: string | null;
	deskripsi_rapor?: string | null;
	guru_id: string;
	input_at?: Date | null;
	updated_at?: Date | null;
}

export interface KenaikanKelas {
	kenaikan_id: string;
	siswa_id: string;
	ta_id: string;
	kelas_asal_id: string;
	kelas_tujuan_id?: string | null;
	status_kenaikan: KenaikanKelasStatusKenaikan;
	keterangan?: string | null;
	tanggal_proses: Date;
	user_proses_id: string;
}

export interface KategoriBerita {
	kategori_id: string;
	nama_kategori: string;
	deskripsi?: string | null;
}

export interface Berita {
	berita_id: string;
	judul: string;
	ringkasan?: string | null;
	konten_lengkap: string;
	kategori_id?: string | null;
	gambar_utama?: string | null;
	tanggal_publikasi: Date;
	is_published?: boolean | null;
	penulis_user_id: string;
	tags?: string | null;
	views_count?: number | null;
	is_featured?: boolean | null;
	created_at?: Date | null;
	updated_at: Date;
	editor_user_id?: string | null;
}

export interface KategoriKegiatan {
	kategori_id: string;
	nama_kategori: string;
	deskripsi?: string | null;
}

export interface Kegiatan {
	kegiatan_id: string;
	judul: string;
	tanggal_mulai: Date;
	tanggal_selesai?: Date | null;
	lokasi: string;
	deskripsi?: string | null;
	kategori_id?: string | null;
	gambar_utama?: string | null;
	status?: KegiatanStatus | null;
	penulis_user_id: string;
	created_at?: Date | null;
	updated_at?: Date | null;
	is_featured?: boolean | null;
}

export interface Pengumuman {
	pengumuman_id: string;
	judul: string;
	pesan_singkat: string;
	konten_lengkap?: string | null;
	tanggal_penting?: Date | null;
	is_sticky?: boolean | null;
	masa_berlaku_sampai?: Date | null;
	audiens_jenjang_id?: string | null;
	penulis_user_id: string;
	created_at?: Date | null;
	updated_at?: Date | null;
}

export interface KontenWeb {
	konten_id: string;
	konten_key: string;
	konten_value?: string | null;
}

export interface Galleries {
	pic_id: string;
	folder_name: string;
	pic_name: string;
	caption?: string | null;
	created_at?: Date | null;
	updated_at?: Date | null;
}

// ---------------- ENUMS ----------------

export enum Gender {
	Laki_Laki = "Laki_Laki",
	Perempuan = "Perempuan",
}

export enum PrestasiTingkat {
	Sekolah = "Sekolah",
	Kabupaten = "Kabupaten",
	Provinsi = "Provinsi",
	Nasional = "Nasional",
	Internasional = "Internasional",
}

export enum TahunAjaranSemester {
	Ganjil = "Ganjil",
	Genap = "Genap",
}

export enum KenaikanKelasStatusKenaikan {
	Naik = "Naik",
	Lulus = "Lulus",
	Tinggal = "Tinggal",
}

export enum PrestasiTipePenerima {
	Siswa = "Siswa",
	Guru = "Guru",
	Sekolah = "Sekolah",
}

export enum KegiatanStatus {
	Akan_Datang = "Akan_Datang",
	Berlangsung = "Berlangsung",
	Selesai = "Selesai",
	Dibatalkan = "Dibatalkan",
}

export enum Agama {
	Islam = "Islam",
	Kristen = "Kristen",
	Katolik = "Katolik",
	Hindu = "Hindu",
	Budha = "Budha",
	Konghucu = "Konghucu",
	Lainnya = "Lainnya",
}

export enum GolDarah {
	A = "A",
	B = "B",
	AB = "AB",
	O = "O",
}

export enum JenisDokumen {
	AkteKelahiran = "AkteKelahiran",
	KartuKeluarga = "KartuKeluarga",
	BuktiTransfer = "BuktiTransfer",
}

export enum PermissionGrup {
	dashboard = "dashboard",
	user = "user",
	siswa = "siswa",
	guru = "guru",
	kelas = "kelas",
	mapel = "mapel",
	nilai = "nilai",
	media = "media",
	berita = "berita",
	pengumuman = "pengumuman",
}
