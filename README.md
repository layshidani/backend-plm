# Instalações e configuração inicial

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

---

[Documentação sequelize >>> migration >>> Creating first model](http://docs.sequelizejs.com/manual/migrations.html#creating-first-model--and-migration-)

## Cria o banco de dados:

```shell
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

abre o DBeaver

* Clica em **new database conection**, 
* Seleciona **SQLite**
* Seleciona a pasta do projeto

## Criar banco de dados *Products*
(não incluir id, nem espaço entre as vírgulas)

```shell
npx sequelize-cli model:generate --name Products --attributes name:string,price:string,order:integer
```

## Criar banco de dados *Orders*
```shell
npx sequelize-cli model:generate --name Orders --attributes status:string
```

## Criar banco de dados *OrdersProducts*
```shell
npx sequelize-cli model:generate --name OrdersProducts --attributes orderId:string,productId:string
```
---

## Associações

[Docs](http://docs.sequelizejs.com/manual/associations.html)
