// config.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // Change this if you're using a different database
});

module.exports = sequelize;
