const express = require('express');
const router = express.Router();
const penerbanganController = require('../controllers/penerbanganController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', penerbanganController.getAll);
router.get('/:id', penerbanganController.getById);
router.post('/', cekApiKey, penerbanganController.create);
router.put('/:id', cekApiKey, penerbanganController.update);
router.delete('/:id', cekApiKey, penerbanganController.remove);

module.exports = router;