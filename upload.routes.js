const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const verificarToken = require('../middlewares/verificarToken');

router.post('/upload', verificarToken, upload.single('foto'), (req, res) => {
  res.json({ status: 'ok', message: 'Archivo subido', data: { file: req.file.filename } });
});

module.exports = router;
