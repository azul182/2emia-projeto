const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    file:String,
    title:String,
    description:String,
    userId:String,
    enviado: {type: Date, default: Date.Now}
})

const posting = mongoose.model('posting',modelo)

module.exports = posting