const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexControllers');

//rutas 
router.get('/', controller.index);
/*router.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/index.html'));
});*/

module.exports = router;