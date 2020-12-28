const path = require('path');
module.exports = {
    login: (req, res) => {
        //res.sendFile(path.join(__dirname, '/../views/login.html'));
        res.render('users/login');
    },
    register: (req, res) => {
        // res.sendFile(path.join(__dirname, '/../views/register.html'));
        res.render('users/register');
    },

    contacto: (req, res) => {
        // res.sendFile(path.join(__dirname, '/../views/contacto.html'));
        res.render('users/contacto');
    }

}