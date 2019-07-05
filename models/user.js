'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Orders, { foreignKey: 'uid' });
  };

  // User.bulkCreate(
  //   { firstName: 'test1', lastName: 'test1', email: 'test1@test.com' },
  //   { firstName: 'test2', lastName: 'test2', email: 'test2@test.com' },
  //   { firstName: 'test3', lastName: 'test3', email: 'test3@test.com' }
  // );

  return User;
};
