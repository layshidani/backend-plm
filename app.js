const express = require('express');
const app = express();
const db = require('./models/index');


app.get('/', (req, resp) => {
  // resposta
  resp.send('>>> Legal! <<<')
});


app.listen(3001, () => {
  console.log('>>>Rodando<<<');
})

db.sequelize.sync();
