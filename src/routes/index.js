const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexControllers');

//rutas 
router.get('/', controller.index);
router.get('/search', controller.search);
router.get('/about', controller.about);

module.exports = router;