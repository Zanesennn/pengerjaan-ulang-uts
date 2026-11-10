const Maskapai = require('../models/maskapaiModel');

exports.create = async (req, res) => {
  try {
    const maskapai = await Maskapai.create(req.body);
    res.status(201).json(maskapai);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  res.json(await Maskapai.find());
};