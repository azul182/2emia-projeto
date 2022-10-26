//sopa sapo soco suco no spotify!!!
const express = require('express')

const app = express()

const consign = require('consign')

app.use(express.json())
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))

consign().include('./routes').into(app)

app.use(express.static('./assets/'))

const porta = process.env.PORT || 3535

module.exports = {app, porta}





