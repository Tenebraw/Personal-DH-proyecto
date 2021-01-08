const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {
    index: (req, res) => {
        //Una vez que empezamos a usar ejs, la siguente linea no va, se reemplaza por render.
        // res.sendFile(path.join(__dirname, '/../views/index.html'));
        res.render('./index/index', { products, toThousand });
    },
    search: (req, res) => {
        let results = [];

        if (req.query.keywords) {
            results = products.filter(product => product.name.toLowerCase().includes(req.query.keywords.toLowerCase()));

        }
        res.render('./index/results', { results });
    },
    about: (req, res) => {
        res.render('./index/aboutus');
    }
};

module.exports = controller;