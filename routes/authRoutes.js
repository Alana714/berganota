const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

router.post('/login', authController.auth);
router.get('/sair', authController.sair);

module.exports = router;