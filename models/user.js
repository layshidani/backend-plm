'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Orders, { foreignKey: 'uid' });
  };

  User.create({firstName: 'test3', email: 'test3@test.com'})
  return User;
};
