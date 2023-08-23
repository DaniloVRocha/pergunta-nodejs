const Sequelize = require('sequelize');
const connection = require('./database');

const respostas = connection.define('respostas', {
    corpo : {
        type: Sequelize.TEXT,
        allowNull : false
    },
    perguntaId : {
        type: Sequelize.INTEGER,
        allowNull:false
    }
});

respostas.sync({force: false}).then(()=>{console.log("A tabela respostas foi criada")});

module.exports = respostas;