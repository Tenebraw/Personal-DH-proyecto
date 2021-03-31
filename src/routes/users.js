const express = require('express');
const router = express.Router();
const guestRoutes = require('../middlewares/guestRoutes');
const adminRoutes = require('../middlewares/adminRoutes');
const userRoutes = require('../middlewares/userRoutes');


//const path = require('path');
/*const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, `../../public/images/users/${req.body.category}`));

    },
    filename: (req, file, callback) => {
        callback(null, 'product-' + Date.now() + path.extname(file.originalname));
    }
});*/

const validate = require('../validators/usersvalidators');
const usersController = require('../controllers/usersControllers');

//rutas
router.get('/', usersController.users);

router.get('/login', guestRoutes, usersController.login);
router.post('/login', validate.loginForm, usersController.authenticate);
router.post('/logout', usersController.logout); //Deberia ir por post

router.get('/contacto', usersController.contacto);

//Dudo si contacto deberia tener un router.post. Vere.

//Registro. Creacion de un nuevo usuario.
router.get('/register', guestRoutes, usersController.register);
router.post('/', validate.registerForm, usersController.storeUser);

//Delete de usuario.
router.delete('/:id', adminRoutes, usersController.destroy);

router.get('/:id', usersController.profile);

module.exports = router;