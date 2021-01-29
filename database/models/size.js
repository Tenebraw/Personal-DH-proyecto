'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Size extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsToMany(models.product, { through: 'products_sizes' });
            //through lo uso para indicar una relacion de muchos a muchos y evitar crear un modelo solo para la tabla intermedia.
        }
    };
    Size.init({
        name: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'size',
    });
    return Size;
};