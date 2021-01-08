const express = require('express');
const router = express.Router();
const path = require('path');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, `../../public/images/products/${req.body.category}`));

    },
    filename: (req, file, callback) => {
        callback(null, 'product-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });
const productsController = require('../controllers/productsControllers');


//rutas

router.get('/indumentaria', productsController.indumentaria);

router.get('/accesorios', productsController.accesorios);

router.get('/bijouterie', productsController.bijouterie);

router.get('/home', productsController.home);

//Carrito
router.get('/cart', productsController.cart);

//Creacion y guardado un producto
router.get('/create', productsController.create);
router.post('/', upload.single('image'), productsController.store);

//Editar un producto y actualizacion
router.get('/:id/edit', productsController.edit);
router.put('/:id', upload.single('image'), productsController.update);

//Detalle de cada producto
router.get('/:id', productsController.detail);

//Delete
router.delete('/:id', productsController.destroy);

module.exports = router;