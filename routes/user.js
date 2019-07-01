const router = require('express').Router();
const models = require('../models');
const User = models.User;

// todos os usuários user.dataValues
router.get('/', (req, res) => {
  // findAll() => http://docs.sequelizejs.com/manual/querying.html

  User.findAll()
  .then(users => {
    const usersList = users.map(user => user.dataValues)
    res.send(usersList)
  });
})

// Usuário específico
router.get('/:id', (req, res) => {
  User.findOne({where: {id:req.params.id}})
  .then(user => {
    res.send(user);
  })
})

// ou
// router.get('/:id', (req, res) => {
// pk = primary key
//   User.findByPk(req.params.id)
//   .then(user => {
//     console.log(user);
    
//     res.send(user)
//   });
// })

module.exports = router;
