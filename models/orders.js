'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    status: DataTypes.STRING,
    uid: DataTypes.INTEGER
  }, {});
  Orders.associate = function(models) {
    // associations can be defined here
    Orders.belongsTo(models.User, {foreign: 'uid'});
    Orders.hasMany(models.OrderProducts, {foreignKey: 'orderId'});
    
  };
  return Orders;
};
