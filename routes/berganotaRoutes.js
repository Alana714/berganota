const express = require('express');
const router = express.Router();
const berganotaController = require('../controller/berganotaController');

router.get('/', berganotaController.getLogin);
router.get('/cadastro', berganotaController.getRegister);
router.get('/inicio', berganotaController.getIndex);
router.get('/perfil', berganotaController.getProfile);
router.get('/teste', berganotaController.getTest);

module.exports = router;
