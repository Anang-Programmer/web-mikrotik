# MikroTik Web Learning Platform

Sebuah platform E-Learning interaktif berbasis web yang dikhususkan untuk mempelajari konsep dan konfigurasi jaringan komputer menggunakan perangkat **MikroTik (RouterOS)**. Aplikasi ini menyediakan materi terstruktur dari dasar hingga tingkat lanjut, sistem evaluasi ujian, dan panel khusus untuk tenaga pengajar.

---

## 🎯 Fitur Utama

### 1. Modul Materi Terstruktur (6 Bab)
Materi dibagi menjadi tahapan yang jelas untuk memudahkan pembelajaran:
- **Bab 1: Fondasi Jaringan** (Pengenalan RouterOS, Metode Akses, IP Address, dll)
- **Bab 2: Routing Inti (Layer 3)** (Tabel Routing, Static Route, Default Route, Failover)
- **Bab 3: NAT (Network Address Translation)** (Source NAT, Destination NAT / Port Forwarding)
- **Bab 4: Packet Flow** (Input/Output, Forward, Prerouting, Postrouting)
- **Bab 5: Manajemen Fitur Mutakhir** (Manajemen Bandwidth, Firewall Filter, DHCP, DNS, NTP)
- **Bab 6: Analisa & Troubleshooting** (Diagnosa Jaringan, System Logging, Monitoring Trafik)

### 2. Role-Based Access Control (RBAC)
- **Siswa**: Dapat mengakses seluruh materi pembelajaran dan mengikuti sesi Ujian (Exam).
- **Guru / Admin**: Memiliki dashboard khusus (`/dashboard-guru`) untuk memantau data siswa dan mengelola bank soal ujian.

### 3. Sistem Evaluasi & Ujian
Terdapat halaman khusus ujian yang hanya dapat diakses setelah login, digunakan untuk mengukur tingkat pemahaman siswa terhadap materi MikroTik.

---

## 🛠️ Teknologi yang Digunakan

Aplikasi ini dibangun dengan menggunakan teknologi modern:
- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM (v7)
- **Icons**: Lucide React
- **Backend & Database**: Supabase (PostgreSQL, Authentication)

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

### 1. Prasyarat
Pastikan Anda sudah menginstal Node.js di komputer Anda. Disarankan menggunakan Node versi terbaru (LTS).

### 2. Instalasi
Clone repository dan masuk ke folder proyek, lalu jalankan perintah:

```bash
npm install
# atau jika menggunakan pnpm
pnpm install
```

### 3. Konfigurasi Environment (`.env`)
Buat file `.env` di direktori utama (root) proyek, dan masukkan kredensial Supabase Anda:
```env
VITE_SUPABASE_URL=url_project_supabase_anda
VITE_SUPABASE_ANON_KEY=anon_key_project_supabase_anda
```

### 4. Menjalankan Server Development
```bash
npm run dev
# atau
pnpm dev
```
Setelah server berjalan, buka browser dan akses `http://localhost:5173/`.

---

## 📂 Struktur Direktori Utama

- `src/pages/` : Berisi halaman-halaman aplikasi (Home, Login, Modul Bab, Dashboard Guru, dll)
- `src/components/` : Berisi komponen UI modular seperti `ProtectedRoute`, dll.
- `src/layout/` : Layout utama seperti `Header` dan `Footer`.
- `src/context/` & `src/lib/` : Manajemen global state dan utilitas aplikasi.
