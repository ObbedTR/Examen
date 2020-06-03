const express = require('express');

let artista = require('../controllers/artistController.js');

let router = express.Router();

router.get('/', artista.list);

module.exports = router;