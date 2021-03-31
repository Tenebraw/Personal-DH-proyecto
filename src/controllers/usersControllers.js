const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jsonTable = require('../database/jsonTable');
const userModel = jsonTable('usersDataBase');
const userTokensModels = jsonTable('usersTokens');

const { validationResult } = require('express-validator');
const { user, type, token } = require('../../database/models');

module.exports = {
    login: (req, res) => {
        //res.sendFile(path.join(__dirname, '/../views/login.html'));
        return res.render('users/login');
    },
    authenticate: async(req, res) => {
        let errors = await validationResult(req);

        if (errors.isEmpty()) {
            let usuario = await user.findOne({
                where: { email: req.body.email }
            }, 'password')

            if (usuario) {
                let hash = await bcrypt.hashSync(usuario.password, 8);
                let password = req.body.password;
                if (bcrypt.compareSync(password, hash)) {
                    delete usuario.password;
                    req.session.user = usuario;
                    if (req.body.remember) {
                        const tokendata = await crypto.randomBytes(64).toString('base64');
                        //userTokensModels.create({ userId: usuario.id, token });
                        token.create({ usertoken: usuario.id, token: tokendata })
                        res.cookie('userToken', tokendata, { maxAge: 1000 * 60 * 60 * 24 * 30 * 3 });
                    }
                    return res.redirect('/');
                } else {
                    //res.send(req.body);
                    return res.render('users/login', {
                        errors: { password: { msg: ' El password es incorrecto' } },
                        user: req.body
                    });
                }
            } else {
                return res.render('users/login', {
                    errors: { email: { msg: 'El email no se encuentra registrado' } },
                    user: req.body
                })

            }
            //let user = userModel.findByField('email', req.body.email);
        } else {
            return res.render('users/login', {
                errors: errors.mapped(),
                user: req.body
            });
        }
    },
    logout: (req, res) => {

        let usuario = user.findOne({
            where: { id: req.session.user.id }

        })

        // let userTokens = user.findOne('userId', req.session.user.id);
        //let userTokens = userTokensModels.findByAllField('userId', req.session.user.id);
        //let userTokens = user.findOne({where:})
        //userTokens.forEach(userToken => {
        token.destroy({ where: { usertoken: usuario.id } })
            //token.destroy(userToken.id);

        //  });
        res.clearCookie('userToken');
        req.session.destroy();
        return res.redirect('/');

    },
    register: (req, res) => {
        // res.sendFile(path.join(__dirname, '/../views/register.html'));
        res.render('./users/register');
    },
    profile: async(req, res) => {

        //let usuario = await user.findByPk(req.params.id)
        let usuario = await user.findOne({ where: { id: req.params.id } })
            //console.log(usuario)
            .then(usuario => {
                //  if (req.session.user == usuario.id) {
                return res.render('users/profile', { user: usuario });
                // }

            })
            .catch(error => {
                console.log(error);
            })
            /* let busqueda = userModel.find(req.params.id);
             // console.log(busqueda);
             // res.send(req.session.user);
             if (req.session.user.id == busqueda.id) {
                 res.render('./users/profile', { user: busqueda });
             } else {
                 res.redirect('/');
             }*/

    },

    storeUser: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let newUser = req.body;
            user.create(newUser, { include: 'type' })
                .then(user => {
                    return res.redirect('users/login');

                })

        } else {
            res.render('users/register', { errors: errors.mapped(), user: req.body })

        }
    },

    ////////////////////

    /*let errors = validationResult(req);
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

    },*/
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