'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrdersProducts = sequelize.define('OrdersProducts', {
    orderId: DataTypes.STRING,
    productId: DataTypes.STRING
  }, {});
  OrdersProducts.associate = function(models) {
    // associations can be defined here
  };
  return OrdersProducts;
};