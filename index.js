const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require("./database/database");

connection.authenticate()
    .then(()=>{
        console.log("Conexão feita com o banco de dados")
    }).catch((err)=>{
        console.log(err)
    })

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/", (req,res) => {
    res.render('index');
})

app.get("/perguntar", (req,res) => {
    res.render('perguntar');
})

app.post('/perguntar', (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send(`Formulario recebido \n Titulo: ${titulo} \n Descrição: ${descricao}`);
})

app.listen(3000, () => {console.log("Server Running")});