const { DataTypes } = require('sequelize');
const sequelize = require('./db.js');

const User = sequelize.define('user', {
  task: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  completed: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  progress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = { User };
