const Sequelize = require('sequelize');
const sequelize = new Sequelize('todolist','root', '12345678',{
    host: '127.0.0.1',
    dialect: 'mysql',
    define:{
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamp: true,
    },
    logging: false 
})

module.exports = {Sequelize, sequelize}