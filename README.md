# Test API dengan Node.js dan Express.js

Aplikasi ini adalah contoh sederhana penerapan API yang berbasis Node.js menggunakan Express.js. Sebelum menjalankan aplikasi ini, perlu dilakukan penginsatlan beberapa dependensi terlebih dahulu.

## Langkah-langkah Penginstalan

### 1. Instal Node.js
Pastikan Anda telah menginstal Node.js versi terbaru. Anda bisa mengunduhnya di situs resmi Node.js:
[Download Node.js](https://nodejs.org/)

### 2. Buat File Aplikasi
Buatlah sebuah file baru dengan nama aplikasi, misalnya `app.js`, di folder pilihan Anda.

### 3. Inisialisasi Proyek
Buka terminal di folder aplikasi yang baru saja Anda buat, kemudian jalankan perintah berikut untuk menginisialisasi proyek Node.js:
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
Untuk menjalankan server, Anda dapat menggunakan nodemon agar server secara otomatis restart ketika ada perubahan pada file. Jalankan perintah berikut di terminal:
```bash
npx nodemon app.js
```

### 6. Uji API di Postman
Buka aplikasi Postman dan masukkan URL berikut untuk mencoba API:
```bash
http://localhost:3000/url_yang ada di dalam code
