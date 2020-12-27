const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersControllers');


//rutas
router.get('/login', controller.login);

router.get('/register', controller.register);

router.get('/contacto', controller.contacto);

module.exports = router;