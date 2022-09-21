const Sequelize = require('sequelize');
const db = require('../database');

const Homes = db.define('home', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  home_address: {
    type: Sequelize.STRING,
  },

  home_type: {
    type: Sequelize.STRING,
  },

  home_price: {
    type: Sequelize.INTEGER,
  },

  sale_type: {
    type: Sequelize.STRING,
  },

  bedrooms: {
    type: Sequelize.INTEGER,
  },

  bathrooms: {
    type: Sequelize.INTEGER,
  },

  square_footage: {
    type: Sequelize.INTEGER,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: true,
    field: 'created_at',
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: true,
    field: 'updated_at',
  },
});

module.exports = Homes;
