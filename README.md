# Wartam Digital Portal

Portal statis untuk `portal.wartam.web.id`. Tidak membutuhkan database, backend, Node.js, atau container.

## Menjalankan lokal

Karena katalog dimuat dari `apps.json`, buka melalui web server lokal:

```bash
python3 -m http.server 8080
```

Buka `http://localhost:8080`.

## Menambah aplikasi

Edit `apps.json`, lalu tambahkan objek dengan field berikut:

```json
{
  "name": "Nama aplikasi",
  "description": "Deskripsi singkat.",
  "category": "Pembelajaran",
  "icon": "✦",
  "color": "mint",
  "status": "Aktif",
  "url": "https://contoh.wartam.web.id"
}
```

Kategori yang tersedia: `Pembelajaran`, `Aplikasi`, dan `Proyek`. Warna yang tersedia: `mint`, `amber`, `coral`, `blue`, `violet`, dan `pink`.

## Deploy

Folder ini dapat langsung dipublikasikan sebagai static site di GitHub Pages. Jika dilayani dari VPS, Caddy cukup diarahkan ke folder hasil deploy; tidak perlu menambahkan database atau container baru untuk portal.

## Struktur isi materi

Setiap kartu katalog mengarah ke foldernya sendiri di `materi/`. Contohnya `materi/materi/` dan `materi/aplikasi-administrasi-pembelajaran/`. Di dalam setiap folder terdapat:

- `index.html` sebagai halaman isi materi
- `content.json` sebagai daftar file atau tautan

Untuk menambahkan isi, tambahkan objek baru ke array `resources` pada `content.json`:

```json
{
  "type": "Modul",
  "title": "Modul pembelajaran 1",
  "description": "Deskripsi singkat modul.",
  "url": "files/modul-1.pdf"
}
```

File lokal diletakkan di folder materi terkait, sedangkan tautan eksternal dapat langsung menggunakan URL lengkap seperti `https://contoh.web.id/`.

## Model data lokal

Portal ini menggunakan file JSON lokal tanpa backend atau database:

- `apps.json` berisi katalog aplikasi di halaman utama.
- Setiap folder di `materi/` memiliki `content.json` berisi daftar materi, file, atau tautan.

Kolom `resources` tidak diperlukan pada model ini karena setiap item langsung ditulis sebagai objek di dalam array `resources` pada `content.json` masing-masing.
