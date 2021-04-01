const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//const productoModelo = require('../database/productModel.js');
const jsonTable = require('../database/jsonTable');
const productoModelo = jsonTable('productsDataBase');
const { validationResult } = require('express-validator');
const { user, product, category, image, size } = require('../../database/models');

module.exports = {
    /*Detalle de cada Producto*/
    detail: (req, res) => {

        image.findOne({
                where: { id: req.params.id },
                include: [{
                    model: product,
                    include: [{
                        model: category,
                    }]
                }]
            })
            .then(resultado => {
                product.findOne({
                        where: { id: req.params.id },
                        include: [{
                            model: image,
                            raw: true,
                        }]
                    })
                    .then(resultado2 => {
                        return res.render('products/detail', { products: resultado, images: resultado, category: resultado, toThousand })
                    })
            })
            .catch(error => {
                console.log(error);
                return res.redirect('/');
            })
    },
    addcart: (req, res) => {
        //let busqueda = productoModelo.find(req.params.id);
        // console.log(req.params.id);
        let newcart = req.body;
        //Ver
        //https://github.com/gabrieleromanato/Node.js-Shopping-Cart
        //https://github.com/sourav-dey/shopping-cart-with-sequelize

        // let newProductcart = {
        //    name: busqueda.name,
        //    price: busqueda.price,
        // cantidad: req.body.cantidad,
        //category: req.body.category,
        // size: req.body.size,
        // description: req.body.description,
        //   image: null
        // }
        //if (req.file) {
        //    newProduct.image = req.file.filename;
        //}
        //
        // res.redirect(`/products/${miMax}`);
        //console.log(newcart);

        //res.send(newcart);
        res.status(201).send(newcart);
        //
        //console.log(newProductcart);
        //res.status(204).send(newProductcart);

        //res.json({ success: true });
        //res.sendStatus(200);
        //console.log('bien');
        //res.end();
    },

    /*Creacion y guardado de nuevos Productos*/
    create: (req, res) => {
        category.findAll()
            .then(categories => {
                return res.render('./products/product-create-form', { categories, toThousand });
            })
            .catch(error => {
                return res.redirect('/');
            })
    },

    store: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let prueba;
            if (req.files[1]) {
                prueba = req.files[1].filename;
            } else {
                prueba = null;
            }

            image.create({
                    imagename: req.files[0].filename,
                    //imageback: req.files[1].filename,
                    imageback: prueba ? req.files[1].filename : null,

                    product: [{
                        name: req.body.name,
                        price: req.body.price,
                        category_id: req.body.category,
                        size: req.body.size,
                        gender: req.body.gender,
                        description: req.body.description
                    }]
                }, {
                    include: product

                })
                .then(product => {
                    return res.redirect('/products/' + product.product.id);

                })

        } else {

            category.findAll()
                .then(categories => {
                    return res.render('products/product-create-form', {
                        categories,
                        errors: errors.mapped(),
                        products: req.body
                    });
                })
                /* .catch(error => {
                     console.log(error);
                     return res.redirect('/')
                 })*/
        }
    },

    cart: (req, res) => {
        /*Carrito de Productos*/
        res.render('products/cart');
    },
    /*Listado de Productos Indumentaria*/
    indumentaria: (req, res) => {
        image.findAll({
                include: [{
                    model: product,
                    include: [{
                        model: category,
                    }]
                }]
            })
            .then(resultado => {
                product.findAll({
                        include: [{
                            model: image,
                            raw: true,
                        }]
                    })
                    .then(resultado2 => {
                        return res.render('products/indumentaria', { products: resultado2, images: resultado, category: resultado, toThousand })
                    })
            })
            .catch(error => {
                console.log(error);
                return res.redirect('/');
            })
    },

    /*Listado de Productos Accesorios*/
    accesorios: (req, res) => {
        image.findAll({
                include: [{
                    model: product,
                    include: [{
                        model: category,
                    }]
                }]
            })
            .then(resultado => {
                product.findAll({
                        include: [{
                            model: image,
                            raw: true,
                        }]
                    })
                    .then(resultado2 => {
                        return res.render('products/accesorios', { products: resultado2, images: resultado, category: resultado, toThousand })
                    })
            })
            .catch(error => {
                console.log(error);
                return res.redirect('/');
            })
    },

    /*Listado de Productos Bijouterie*/
    bijouterie: (req, res) => {
        image.findAll({
                include: [{
                    model: product,
                    include: [{
                        model: category,
                    }]
                }]
            })
            .then(resultado => {
                product.findAll({
                        include: [{
                            model: image,
                            raw: true,
                        }]
                    })
                    .then(resultado2 => {
                        return res.render('products/bijouterie', { products: resultado2, images: resultado, category: resultado, toThousand })
                    })
            })
            .catch(error => {
                console.log(error);
                return res.redirect('/');
            })
    },

    /*Listado de Productos Home*/
    home: (req, res) => {
        image.findAll({
                include: [{
                    model: product,
                    include: [{
                        model: category,
                    }]
                }]
            })
            .then(resultado => {
                product.findAll({
                        include: [{
                            model: image,
                            raw: true,
                        }]
                    })
                    .then(resultado2 => {
                        return res.render('products/home', { products: resultado2, images: resultado, category: resultado, toThousand })
                    })
            })
            .catch(error => {
                console.log(error);
                return res.redirect('/');
            })
    },

    women: (req, res) => {
        image.findAll({
                include: [{
                    model: product,
                    include: [{
                        model: category,
                    }]
                }]
            })
            .then(resultado => {
                product.findAll({
                        include: [{
                            model: image,
                            raw: true,
                        }]
                    })
                    .then(resultado2 => {
                        return res.render('products/women', { products: resultado2, images: resultado, category: resultado, toThousand })

                    })
            })
            .catch(error => {
                console.log(error);
                return res.redirect('/');
            })
    },
    men: (req, res) => {
        image.findAll({
                include: [{
                    model: product,
                    include: [{
                        model: category,
                    }]
                }]
            })
            .then(resultado => {
                product.findAll({
                        include: [{
                            model: image,
                            raw: true,
                        }]
                    })
                    .then(resultado2 => {
                        return res.render('products/men', { products: resultado2, images: resultado, category: resultado, toThousand })
                    })
            })
            .catch(error => {
                console.log(error);
                return res.redirect('/');
            })
    },

    /*Edicion y actualización de Productos*/

    edit: async(req, res) => {
        const categoria = await category.findAll();
        product.findByPk(req.params.id, { include: category })
            .then(product => {
                return res.render('./products/product-edit-form', { product, category, categoria, image, toThousand });
            })
            .catch(error => {
                console.log(error);
                return res.redirect('/');
            })
    },

    update: (req, res) => {
        let prueba2;
        if (req.files[1]) {
            prueba2 = req.files[1].filename;
        } else {
            prueba2 = null;
        }

        let updateProduct = {
            name: req.body.name,
            price: req.body.price,
            size: req.body.size,
            gender: req.body.gender,
            description: req.body.description,
            category_id: req.body.category
        }
        let updateImage = {
            imagename: req.files[0].filename,
            imageback: prueba2 ? req.files[1].filename : null,
        }

        image.update(updateImage, { where: { product_id: req.params.id } })
        product.update(updateProduct, { where: { id: req.params.id } })
            .then(updateProduct => {
                return res.redirect('/products/' + req.params.id);
            })
    },

    /*Borrado de Productos*/
    destroy: async(req, res) => {
        // raw true me permite acceder a un datavalue en sequelize, importante para acceder al paramtero que necesito.
        //https://stackoverflow.com/questions/49552040/fail-to-get-the-specific-datavalue-from-the-return-sequelize-json-object
        let imagesdelete = await image.findOne({ raw: true, where: { product_id: req.params.id } });
        let productoborrar = await product.findOne({ raw: true, where: { id: req.params.id } });

        console.log(productoborrar);
        let imagepath = path.join(__dirname, `../../public/images/products/${productoborrar.category_id}/${imagesdelete.imagename}`);
        let imagepath1 = path.join(__dirname, `../../public/images/products/${productoborrar.category_id}/${imagesdelete.imageback}`);

        image.destroy({ where: { product_id: req.params.id } })
        product.destroy({ where: { id: req.params.id } })
            .then(deleteprod => {
                if (fs.existsSync(imagepath)) {
                    fs.unlinkSync(imagepath);
                }
                if (fs.existsSync(imagepath1)) {
                    fs.unlinkSync(imagepath1);
                }
                return res.redirect('/');
            })
    }
};