const Sequelize = require('sequelize');
const connection = require('./database');

const pergunta = connection.define('perguntas', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao : {
        type: Sequelize.TEXT,
        allowNull : false
    }
});

pergunta.sync({force: false}).then(()=>{console.log("A tabela perguntas foi criada")});

module.exports = pergunta;