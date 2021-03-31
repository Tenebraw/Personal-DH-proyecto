const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { product, category, image } = require('../../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const controller = {
    index: (req, res) => {
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
                        return res.render('./index/index', { products: resultado, images: resultado, category: resultado })

                    })
            })
            .catch(error => {
                console.log(error);
                return res.redirect('/');
            })

    },
    search: async(req, res) => {
        let results = [];
        results = await product.findAll({
                where: {
                    name: {
                        [Op.like]: '%' + req.query.keywords + '%'
                    }
                }
            })
            .then(results => {
                return res.render('./index/results', { results });

            })
    },
    about: (req, res) => {
        res.render('./index/aboutus');
    }
};

module.exports = controller;