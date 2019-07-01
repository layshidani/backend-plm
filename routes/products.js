const router = require('express').Router();
const models = require('../models');
const Products = models.Products;

router.get('/', (req, res) => {
  // findAll() => http://docs.sequelizejs.com/manual/querying.html

  Product.findAll()
  .then(products => {
    const productsList = products.map(product => product.dataValues)
    res.send(productsList)
  });
})
