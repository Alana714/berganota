const express = require('express');
const router = express.Router();
const berganotaController = require('../controller/berganotaController');
const usuarioController = require('../controller/usuarioController');

router.get('/', berganotaController.getLogin);
router.get('/cadastro', berganotaController.getRegister);
router.get('/inicio', berganotaController.getIndex);
router.get('/perfil', berganotaController.getProfile);
router.get('/teste', berganotaController.getTest);

router.post('/api/cadastro', usuarioController.cadastrarUsuario);

module.exports = router;
