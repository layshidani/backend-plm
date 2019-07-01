'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    order: DataTypes.INTEGER
  }, {});
  Products.associate = function(models) {
    // associations can be defined here

    Products.bulkCreate([
      {}
    ])
  };
  return Products;
};
