const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsControllers');


//rutas
router.get('/', controller.index);
//Funciona /product, no se ve nada porque aun falta armar el listado de productos, esta vacio.

router.get('/indumentaria', controller.indumentaria);

router.get('/accesorios', controller.accesorios);

router.get('/bijouterie', controller.bijouterie);

router.get('/home', controller.home);

router.get('/detail', controller.detail);

router.get('/cart', controller.cart);

router.get('/edicion', controller.edicion);

module.exports = router;