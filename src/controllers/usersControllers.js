const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jsonTable = require('../database/jsonTable');
const userModel = jsonTable('usersDataBase');
const userTokensModels = jsonTable('usersTokens');

const { validationResult } = require('express-validator');


module.exports = {
    login: (req, res) => {
        //res.sendFile(path.join(__dirname, '/../views/login.html'));
        res.render('users/login');
    },
    authenticate: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let user = userModel.findByField('email', req.body.email);
            if (user) {

                let hash = bcrypt.hashSync(user.password, 8);

                if (bcrypt.compareSync(req.body.password, hash)) {
                    delete user.password;
                    req.session.user = user;
                    if (req.body.remember) {
                        const token = crypto.randomBytes(64).toString('base64');
                        userTokensModels.create({ userId: user.id, token });

                        res.cookie('userToken', token, { maxAge: 1000 * 60 * 60 * 24 * 30 * 3 });
                    }

                    return res.redirect('/');


                } else {
                    //res.send(req.body);
                    res.render('users/login', {

                        errors: { password: { msg: ' El password es incorrecto' } },
                        user: req.body

                    });
                }
            } else {
                res.render('users/login', {
                    errors: { email: { msg: 'El email no se encuentra registrado' } },
                    user: req.body

                });
            }


        } else {

            res.render('users/login', {
                errors: errors.mapped(),
                user: req.body

            });
        }



    },
    logout: (req, res) => {
        let userTokens = userTokensModels.findByAllField('userId', req.session.user.id);
        userTokens.forEach(userToken => {
            userTokensModels.delete(userToken.id);

        });
        res.clearCookie('userToken');
        req.session.destroy();
        res.redirect('/');

    },
    register: (req, res) => {
        // res.sendFile(path.join(__dirname, '/../views/register.html'));
        res.render('./users/register');
    },
    profile: (req, res) => {

        let busqueda = userModel.find(req.params.id);
        // console.log(busqueda);
        // res.send(req.session.user);
        if (req.session.user.id == busqueda.id) {
            res.render('./users/profile', { user: busqueda });
        } else {
            res.redirect('/');
        }


    },


    storeUser: (req, res) => {

        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let miMax = userModel.lastID();
            let newUser = {
                id: miMax,
                first_name: req.body.name,
                last_name: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
                confirmation: req.body.passwordconfirmation,
                category: null
            }

            userModel.create(newUser);
            res.redirect(`/users/${miMax}`);

        } else {
            res.render('users/register', { errors: errors.mapped(), user: req.body });

        }

    },
    destroy: (req, res) => {
        userModel.delete(req.params.id);
        res.redirect('/users/');

    },

    contacto: (req, res) => {
        // res.sendFile(path.join(__dirname, '/../views/contacto.html'));
        res.render('users/contacto');
    },
    users: (req, res) => {
        let usuarios = userModel.all();
        res.render('users/list', { users: usuarios });
    }

}