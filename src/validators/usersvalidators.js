const { check } = require('express-validator');

module.exports = {
    registerForm: [
        check('name')
        .notEmpty().withMessage('Debes ingresar un nombre').bail()
        .trim().isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),

        check('lastname')
        .notEmpty().withMessage('Debes completar el campo apellido').bail()
        .trim().isLength({ min: 3 }).withMessage('El apellido debe tener al menos 3 caracteres'),

        check('email')
        .notEmpty().withMessage('Debes completar el campo email').bail()
        .isEmail().withMessage('Debes ingresar un email valido'),

        check('password')
        .notEmpty().withMessage('Debes completar el campo de password').bail()
        .trim().isLength({ min: 3, max: 16 }).withMessage('La contraseña debe tener entre 3 y 16 caracteres'),

        check('passwordconfirmation')
        .notEmpty().withMessage('Debes confirmar la contraseña').bail()
        .trim().isLength({ min: 3, max: 16 }).withMessage('Debe tener entre 3 caracteres y 16 caracteres.')
        .custom(async(confirmPassword, { req }) => {
            const password = req.body.password

            //Si el password y la confirmacion no son iguales, retorno un nuevo error.
            if (password !== confirmPassword) {
                throw new Error('El password debe ser el mismo');
            }
        }),



    ],
    loginForm: [
        check('email')
        .notEmpty().withMessage('Debes completar el campo mail').bail()
        .isEmail().withMessage('Debes ingresar un mail valido'),

        check('password')
        .trim().notEmpty().withMessage('Debes completar el campo password').bail()
    ]
}