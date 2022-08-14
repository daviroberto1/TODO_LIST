const db = require('./db');
const Tarefas = db.sequelize.define('tarefas',{
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tarefa: {
        type: db.Sequelize.STRING
    }
});

Tarefas.sync();

module.exports = Tarefas;