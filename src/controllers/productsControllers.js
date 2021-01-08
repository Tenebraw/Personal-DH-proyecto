const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productoModelo = require('../database/productModel.js');


module.exports = {
    //index: (req, res) => {
    // let productos = productoModelo.all();
    /*Listado de Productos*/
    // res.render('products', { products: productos, toThousand });
    // },

    /*Detalle de cada Producto*/
    detail: (req, res) => {

        let busqueda = productoModelo.find(req.params.id);
        /*Detalle de Productos*/
        res.render('./products/detail', { product: busqueda, toThousand });
    },

    /*Creacion y guardado de nuevos Productos*/
    create: (req, res) => {
        res.render('./products/product-create-form', { toThousand });

    },

    store: (req, res) => {
        let miMax = productoModelo.lastID();
        let newProduct = {
            id: miMax,
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            size: req.body.size,
            description: req.body.description,
            image: null
        }
        if (req.file) {
            newProduct.image = req.file.filename;
        }
        productoModelo.create(newProduct);
        res.redirect(`/products/${miMax}`);

    },

    cart: (req, res) => {
        /*Carrito de Productos*/
        res.render('products/cart');
    },

    /*Listado de Productos Indumentaria*/
    indumentaria: (req, res) => {
        let productos = productoModelo.all();
        res.render('products/indumentaria', { products: productos, toThousand });
    },

    /*Listado de Productos Accesorios*/
    accesorios: (req, res) => {
        let productos = productoModelo.all();
        res.render('products/accesorios', { products: productos, toThousand });

    },

    /*Listado de Productos Bijouterie*/
    bijouterie: (req, res) => {
        let productos = productoModelo.all();
        res.render('products/bijouterie', { products: productos, toThousand });
    },

    /*Listado de Productos Home*/
    home: (req, res) => {
        let productos = productoModelo.all();
        res.render('products/home', { products: productos, toThousand });
    },

    /*Edicion y actualización de Productos*/

    edit: (req, res) => {
        let product = productoModelo.find(req.params.id);
        /*Carga, edicion y borrado de Productos*/
        res.render('./products/product-edit-form', { product, toThousand });
    },

    update: (req, res) => {
        req.params.id = parseInt(req.params.id);
        let editProduct = {
            id: req.params.id,
            name: req.body.name,
            price: req.body.price,
            size: req.body.size,
            category: req.body.category,
            description: req.body.description,
            image: null
        }
        if (req.file) {
            editProduct.image = req.file.filename;
        }

        let imageAborrar = productoModelo.find(req.params.id);
        let imagepath = path.join(__dirname, `../../public/images/products/${imageAborrar.category}/${imageAborrar.image}`);

        productoModelo.update(editProduct);

        if (fs.existsSync(imagepath)) {
            fs.unlinkSync(imagepath);
        }


        res.redirect(`/products/${req.params.id}`);
    },

    /*Borrado de Productos*/
    destroy: (req, res) => {

        let imageAborrar = productoModelo.find(req.params.id);
        let imagepath = path.join(__dirname, `../../public/images/products/${imageAborrar.category}/${imageAborrar.image}`);


        if (fs.existsSync(imagepath)) {
            fs.unlinkSync(imagepath);
        }
        productoModelo.delete(req.params.id);
        res.redirect('/');
    }

};