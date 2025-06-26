const express = require('express');
const router = express.Router();
const berganotaController = require('../controller/berganotaController');
const authController = require('../controller/authController');

router.get('/', berganotaController.getIndex);
router.get('/cadastro', berganotaController.getRegister);
router.get('/home', authController.verificarAutenticacao, berganotaController.getHome);
router.get('/perfil', authController.verificarAutenticacao, berganotaController.getProfile);
router.get('/teste', berganotaController.getTest);

router.post('/api/add_post', authController.verificarAutenticacao, berganotaController.postNota);
router.post('/api/delete/:id', authController.verificarAutenticacao, berganotaController.deleteNota);

module.exports = router;
