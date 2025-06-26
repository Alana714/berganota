const express = require('express');
const router = express.Router();
const notasController = require('../controller/notasController');
const authController = require('../controller/authController');

router.post('/api/add_post', authController.verificarAutenticacao, notasController.postNotas);

module.exports = router;