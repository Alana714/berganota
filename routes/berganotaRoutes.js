const express = require('express');
const router = express.Router();
const berganotaController = require('../controller/berganotaController');
const authController = require('../controller/authController');

router.get('/', berganotaController.getLogin);
router.get('/cadastro', berganotaController.getRegister);
router.get('/home', authController.verificarAutenticacao, berganotaController.getIndex);
router.get('/perfil', authController.verificarAutenticacao, berganotaController.getProfile);
router.get('/teste', berganotaController.getTest);

router.post('/api/add_post', authController.verificarAutenticacao, berganotaController.postNotas);

module.exports = router;
