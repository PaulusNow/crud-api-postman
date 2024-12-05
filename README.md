# Test API dengan Node.js dan Express.js

Aplikasi ini adalah contoh sederhana penerapan API yang berbasis Node.js menggunakan Express.js. Sebelum menjalankan aplikasi ini, perlu dilakukan penginsatlan beberapa dependensi terlebih dahulu.

## Langkah-langkah Penginstalan

### 1. Instal Node.js
Pastikan Node.js sudah terinstal pada versi terbaru. Jika belum terinstal bisa mengunduhnya di situs resmi Node.js:
[Download Node.js](https://nodejs.org/)

### 2. Buat File Aplikasi
Buat folder baru dengan nama aplikasi di dalamnya, misalnya `app.js`.

### 3. Inisialisasi Proyek
Buka terminal di folder yang sudah dibuat, kemudian jalankan perintah ini untuk menginisialisasi proyek Node.js:
```bash
npm init
```

Ikuti petunjuk di terminal untuk menyelesaikan inisialisasi.

### 4. Instalasi Dependencies
```bash
npm install body-parser
npm install --save-dev nodemon
```

body-parser digunakan untuk memparsing data JSON dari request body.
nodemon digunakan untuk menjalankan aplikasi secara otomatis setiap kali ada perubahan pada file.

### 5. Jalankan Server dengan Nodemon
Untuk menjalankan server, jalankan ini ke dalam terminal:
```bash
npx nodemon app.js
```

### 6. Uji API di Postman
Buka aplikasi Postman dan masukkan URL untuk mencoba API:
```bash
http://localhost:3000/url_yang ada di dalam code
