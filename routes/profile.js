module.exports = (app) => {
    let conexao = require('../config/database')

    app.get('/profile', async (req, res) => {
        conexao()

        let user = req.query.id

        let usuarios = require('../models/usuarios')

        let userDados = await usuarios.find({_id: user})


        res.render("profile.ejs", {
            userDados: userDados,
        })

    })
}