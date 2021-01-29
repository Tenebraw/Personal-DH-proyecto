'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.product);
            this.belongsTo(models.user);
        }
    };
    Order.init({
        precio: DataTypes.INTEGER,
        cantidad: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        product_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'order',
    });
    return Order;
};