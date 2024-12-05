const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Data dummy untuk menyimpan resep
let resepList = [];

// Endpoint untuk mendapatkan semua resep
app.get('/resep', (req, res) => {
  if (resepList.length === 0) {
        res.send("Belum ada resep yang tersedia")
  } else {
        res.json(resepList);
  }
});

// Endpoint untuk mendapatkan resep berdasarkan ID
app.get('/resep/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const resep = resepList.find(r => r.id === id);
  if (resep) {
    res.json(resep);
  } else {
    res.status(404).send('Resep tidak ditemukan');
  }
});

// Endpoint untuk menambahkan resep baru
app.post('/resep', (req, res) => {
  const newResep = {
    id: resepList.length + 1, // ID baru
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions
  };
  resepList.push(newResep);
  res.status(201).json(newResep);
});

// Endpoint untuk memperbarui resep berdasarkan ID
app.put('/resep/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const resepIndex = resepList.findIndex(r => r.id === id);
  if (resepIndex !== -1) {
    const updatedResep = {
      id: id,
      name: req.body.name,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions
    };
    resepList[resepIndex] = updatedResep;
    res.json(updatedResep);
  } else {
    res.status(404).send('Resep tidak ditemukan');
  }
});

// Endpoint untuk menghapus resep berdasarkan ID
app.delete('/resep/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const resepIndex = resepList.findIndex(r => r.id === id);
  if (resepIndex !== -1) {
    resepList.splice(resepIndex, 1);
    res.send('Resep berhasil dihapus')
    res.status(204)
  } else {
    res.status(404).send('Resep tidak ditemukan');
  }
});

// Menangani request yang tidak valid
app.use((req, res) => {
  res.status(400).send('Bad Request');
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});