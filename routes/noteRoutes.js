const express = require('express');
const router = express.Router;
const notasController = require('../controller/notasController');

router.post('/api/add_post', notasController.postNotas);

module.exports = router;