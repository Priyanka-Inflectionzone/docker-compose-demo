const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

const User = sequelize.define('User', { 
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = User;