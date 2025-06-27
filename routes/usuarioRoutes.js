const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');
const authController = require('../controller/authController');

router.post('/api/cadastro', usuarioController.cadastrarUsuario);
router.post('/api/edit-profile/:id', authController.verificarAutenticacao, usuarioController.editUsuario)

module.exports = router;