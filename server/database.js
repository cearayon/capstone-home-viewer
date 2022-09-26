require('dotenv').config();
const { Sequelize } = require('sequelize');

const { DATABASE, USER, PASSWORD } = process.env;

module.exports = new Sequelize(DATABASE, USER, PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  operatorAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
