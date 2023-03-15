const { Sequelize } = require('sequelize'); 
const { dotenv } = require ('dotenv');
require('dotenv').config();

const mysql = require('mysql2/promise');

const dbName = process.env.DB_NAME || "YOUR_DB";
    
mysql.createConnection({
        host: process.env.DB_HOST || "127.0.0.1",
        port: process.env.DB_PORT || "3306",
        user     : process.env.DB_USER_NAME || "root",
        password : process.env.DB_USER_PASSWORD || "root",
    }).then( connection => {
        connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
            console.info("Database create or successfully checked");
        })
    })


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER_NAME, process.env.DB_USER_PASSWORD, {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  logging: false,
}); 





sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(error => {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }); 

  

module.exports = sequelize;