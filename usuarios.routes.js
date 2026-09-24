const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/usuarios.controller');
const verificarToken = require('../middlewares/verificarToken');

router.get('/', verificarToken, ctrl.getAll);
router.get('/perfil', verificarToken, ctrl.perfil);
router.get('/:id', verificarToken, ctrl.getOne);
router.put('/:id', verificarToken, ctrl.update);
router.delete('/:id', verificarToken, ctrl.delete);

module.exports = router;
