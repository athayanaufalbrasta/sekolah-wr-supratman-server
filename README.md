# 🚀 Dokumentasi Database (Prisma)

## ⚙️ Persiapan Awal

### 1\. File Konfigurasi

Pastikan _file_ **`.env`** kamu sudah memiliki variabel koneksi _database_ yang valid:

```dotenv
SUPABASE_URL="postgresql://postgres.[PROJECT_NAME]:[PROJECT_PASSWORD]@[YOUR_SERVER].pooler.supabase.com:[PORT]/postgres?pgbouncer=true""

DIRECT_SUPABASE_URL="postgres://postgres.[PROJECT_NAME]:[PROJECT_PASSWORD]@[YOUR_SERVER].pooler.supabase.com:[PORT]/postgres?pgbouncer=true""
```

### 2\. Skema Database

Jika kamu mengubah **`prisma/schema.prisma`** (misalnya, menambah tabel baru, kolom, atau mengubah tipe data), kamu perlu menjalankan **migrasi**. Migrasi akan membuat perubahan tersebut diaplikasikan ke _database_ aslimu.

### Menjalankan Migrasi Baru

Untuk membuat dan menjalankan migrasi baru:

```bash
npx prisma migrate dev
```

| Peran       | Keterangan                                                                                                                                                   |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tujuan**  | 1. Membuat _file_ migrasi baru (di folder `prisma/migrations`). 2. Menjalankan skrip migrasi tersebut ke _database_ (seperti `ALTER TABLE`, `CREATE TABLE`). |
| **Langkah** | Setelah menjalankan perintah, kamu akan diminta untuk **memberi nama** migrasinya (misalnya: `add_user_and_product_tables`).                                 |
| **Catatan** | Perintah ini cocok untuk lingkungan **pengembangan** (_development_).                                                                                        |

i yang perlu ditambahkan atau diubah? 😊

### 3\. Regenerate Prisma Client

Jika kamu baru meng-_clone_ proyek atau setelah mengubah _schema_ dari _database_ luar, jalankan ini untuk membuat ulang _client_ Prisma:

```bash
npx prisma generate
```

_(Perintah ini memastikan kode di `db.js` kamu bisa menggunakan model-model database.)_

## 🌾 Seeding Data Awal

### Menjalankan Seeder

Pastikan _script_ _seeder_ kamu berada di `prisma/seed.js`. Untuk menjalankannya:

```bash
npx prisma db seed
```

| Peran       | Keterangan                                                                         |
| :---------- | :--------------------------------------------------------------------------------- |
| **Tujuan**  | Menjalankan _script_ yang dikonfigurasi di `package.json` untuk mengisi data awal. |
| **Catatan** | Perintah ini biasanya dijalankan setelah `prisma migrate dev`.                     |

### **Urutan Proses (Sederhana):**

1.  Ubah **`prisma/schema.prisma`**
2.  Jalankan **`npx prisma migrate dev`** (beri nama)
3.  Jalankan **`npx prisma generate`**
4.  Jalankan **`npx prisma db seed`** (jika perlu data awal)

---

*(Akses di *browser* (online) : `https://wr-supratman-server.vercel.app/`)*
*(Akses di *browser* (local) : `http://localhost:3000/`)*

*(Akses dokumentasi di *browser* (online) : `https://wr-supratman-server.vercel.app/api-docs/`)*
*(Akses dokumentasi di *browser* (local) : `http://localhost:3000/api-docs/`)*
