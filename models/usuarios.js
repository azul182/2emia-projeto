//importar o mongoose 
const mongoose = require('mongoose')

//criar a estrutura para o armazenamento das informacoes do usuario 
const modelo = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    date: {type: Date, default:Date.now }
})

//gravar a estrutura na model usuarios 
const usuarios = mongoose.model('usuarios', modelo)

//exportar os dados para acesso externo

module.exports = usuarios 
