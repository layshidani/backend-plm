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

  // User.create({firstName: 'test1', lastName: 'test1', email: 'test1@test.com'});
  // User.create({firstName: 'test2', lastName: 'test2', email: 'test2@test.com'});
  // User.create({firstName: 'test3', lastName: 'test3', email: 'test3@test.com'});

  return User;
};
