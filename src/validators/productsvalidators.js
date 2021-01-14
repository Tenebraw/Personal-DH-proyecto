const { check } = require('express-validator');

module.exports = {
    createForm: [
        check('name')
        .notEmpty().withMessage('Debes completar el campo nombre').bail()
        .trim().isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),

        check('description')
        .notEmpty().withMessage('Debes completar el campo descripcion').bail()
        .isLength({ min: 10 }).withMessage('La descripcion debe tener al menos 10 caracteres'),

        check('price')
        .notEmpty().withMessage('Debes completar el campo precio').bail()
        .isLength({ min: 2 }).withMessage('El precio debe ser de dos digitos al menos')
        .isNumeric().withMessage('Debe ingresar solo numeros'),

        check('category')
        .notEmpty().withMessage('Debes elegir al menos una categoria').bail(),

        check('image')
        .custom((value, { req }) => {
            if (!req.file) throw new Error("Una imagen es requerida");
            return true;
        }),


    ],
    updateForm: [
        check('name')
        .notEmpty().withMessage('Debes completar el campo nombre').bail()
        .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),

        check('description')
        .notEmpty().withMessage('Debes completar el campo descripcion').bail()
        .isLength({ min: 10 }).withMessage('La descripcion debe tener al menos 10 caracteres'),

        check('price')
        .notEmpty().withMessage('Debes completar el campo precio').bail()
        .isLength({ min: 2 }).withMessage('El precio debe ser de dos digitos al menos')
        .isNumeric().withMessage('Debe ingresar solo numeros'),

        check('category')
        .notEmpty().withMessage('Debes elegir al menos una categoria').bail(),

        check('image')
        .custom((value, { req }) => {
            if (!req.file) throw new Error("Una imagen es requerida");
            return true;
        }),
    ],
    searchForm: [
        check('search')
        .notEmpty().withMessage('Debes completar el campo busqueda').bail()
        .isLength({ min: 3 }).withMessage('La busqueda debe tener al menos 3 caracteres')
    ]

}