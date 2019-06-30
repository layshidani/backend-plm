const router = require('express').Router();
const models = require('../models');
const User = models.User;

router.get('/', (req, res) => {
  // findAll() => http://docs.sequelizejs.com/manual/querying.html

  User.findAll()
  .then(users => {
    const usersList = users.map(user => user.dataValues)
    res.send(usersList)
  });
  
})

module.exports = router;
