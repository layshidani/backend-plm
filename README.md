Instalações e configuração inicial

```shell
npm init
npm install --save express sequelize sqlite3 sequelize-cli
npx sequelize-cli init

npm install -g nodemon
```

**Neste projeto, deletamos as pastas *seeders* e *config*.**

Deletar do arquivo index.js da pasta models:
```js
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
```

Substituir:
```js
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
```

por:
```js
const sequelize = new Sequelize('sqlite://database.sqlite');
```
