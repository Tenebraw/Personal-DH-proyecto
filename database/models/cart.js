'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {

        static associate(models) {
            // define association here
            this.belongsTo(models.user);
            this.belongsToMany(models.product, { through: 'cartitem' });
        }
    };
    Cart.init({
        // id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'cart',
    });
    return Cart;
};