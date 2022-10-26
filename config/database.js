//importar o mongoose
const mongoose = require('mongoose')
//scritps de conexao 
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://UserAdmin:oliver123@redesocial.bxeqlaj.mongodb.net/Hubber')
}
//exportar as informacoes para acesso externo 
module.exports = conn