const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');

router.post('/api/cadastro', usuarioController.cadastrarUsuario);

module.exports = router;