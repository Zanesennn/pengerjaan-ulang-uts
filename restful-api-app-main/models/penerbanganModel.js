const mongoose = require('mongoose');

const jadwalSchema = new mongoose.Schema({
  berangkat: String,
  tiba: String,
}, { _id: false });

const penerbanganSchema = new mongoose.Schema({
  kodePenerbangan: { type: String, required: [true, 'kode penerbangan wajib diisi'], trim: true },
  rute: { type: String, required: [true, 'rute wajib diisi'], unique: true, trim: true },
  hargaTiket: { type: String, required: [true, 'harga tiket wajib diisi'], trim: true },
  status: { type: String, required: [true, 'status wajib diisi'], trim: true },
  jadwal: jadwalSchema,
  maskapaiId: { type: mongoose.Schema.Types.ObjectId, ref: 'Maskapai' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Penerbangan', penerbanganSchema);