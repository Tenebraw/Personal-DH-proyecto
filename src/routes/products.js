const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsControllers');


//rutas
router.get('/', controller.index);

router.get('/detail', controller.detail);

router.get('/cart', controller.cart);

router.get('/edicion', controller.add);

module.exports = router;