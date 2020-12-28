//const path = require('path');
module.exports = {
    index: (req, res) => {
        // res.sendFile(path.join(__dirname, '/../views/productList.html'));
        /**Listado de Productos*/
        res.render('products/index');
    },
    detail: (req, res) => {
        // res.sendFile(path.join(__dirname, '/../views/productDetail.html'));
        /*Detalle de Productos*/
        res.render('products/detail');
    },

    cart: (req, res) => {
        // res.sendFile(path.join(__dirname, '/../views/productCart.html'));
        /*Carrito de Productos*/
        res.render('products/cart');
    },

    indumentaria: (req, res) => {
        res.render('products/indumentaria');
    },


    accesorios: (req, res) => {
        res.render('products/accesorios');

    },
    bijouterie: (req, res) => {
        res.render('products/bijouterie');
    },

    home: (req, res) => {
        res.render('products/home');
    },

    edicion: (req, res) => {
        // res.sendFile(path.join(__dirname, '/../views/cargayedicion.html'));
        /*Carga, edicion y borrado de Productos*/
        res.render('products/edicion');
    }



}