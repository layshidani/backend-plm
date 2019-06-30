const express = require('express');
const app = express();
const db = require('./models/index');


app.get('/', (req, resp) => {
  // resposta
  resp.send('>>> Foi! <<<')
});


app.listen(2019, () => {
  console.log('>>>Rodando<<<');
});

app.use('/users', require('./routes/user'));

db.sequelize.sync();
