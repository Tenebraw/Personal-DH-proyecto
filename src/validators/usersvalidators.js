const { check } = require('express-validator');
const { user } = require('../../database/models');

module.exports = {
    registerForm: [
        check('first_name')
        .notEmpty().withMessage('Debes ingresar un nombre').bail()
        .trim().isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),

        check('last_name')
        .notEmpty().withMessage('Debes completar el campo apellido').bail()
        .trim().isLength({ min: 3 }).withMessage('El apellido debe tener al menos 3 caracteres'),

        check('email')
        .notEmpty().withMessage('Debes completar el campo email').bail()
        .isEmail().withMessage('Debes ingresar un email valido'),

        check('password')
        .notEmpty().withMessage('Debes completar el campo de password').bail()
        .trim().isLength({ min: 8, max: 16 }).withMessage('La contraseña debe tener entre 8 y 16 caracteres')
        .matches('[0-9]').withMessage('La contraseña debe incluir al menos un numero')
        .matches('[a-z]').withMessage('La contraseña debe incluir al menos una letra minuscula')
        .matches('[A-Z]').withMessage('La contraseña debe incluir al menos una letra mayuscula'),

        check('passwordconfirmation')
        .notEmpty().withMessage('Debes confirmar la contraseña').bail()
        .trim().isLength({ min: 8, max: 16 }).withMessage('Debe tener entre 8 caracteres y 16 caracteres.')
        .custom(async(passwordconfirmation, { req }) => {
            const password = req.body.password

            //Si el password y la confirmacion no son iguales, retorno un nuevo error.
            if (password !== passwordconfirmation) {
                throw new Error('El password debe ser el mismo');
            }
        })
        .custom(async(email, { req }) => {
            const sameemail = await user.findOne({
                where: { email: req.body.email }
            })
            if (sameemail) {
                throw new Error('El email ya se encuentra registrado');
            }
        })
    ],

    loginForm: [
        check('email')
        .notEmpty().withMessage('Debes completar el campo mail').bail()
        .isEmail().withMessage('Debes ingresar un mail valido'),

        check('password')
        .trim().notEmpty().withMessage('Debes completar el campo password').bail()
    ]
}