const { dirname } = require('path');
const path = require('path');
module.exports = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '/../views/index.html'));
    },
    detail: (req, res) => {
        res.sendFile(path.join(__dirname, '/../views/productDetail.html'));
    },

    cart: (req, res) => {
        res.sendFile(path.join(__dirname, '/../views/productCart.html'));
    },

    add: (req, res) => {
        res.sendFile(path.join(__dirname, '/../views/cargayedicion.html'));
    }



}