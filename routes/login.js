
module.exports = (app)=> {
    app.get('/login', (req,res)=> {
        let user = req.query.id
        
        if(user){
            res.redirect(`/profile?id=${user}`)
        }else{
            res.render('login')
        }
        
    })

    app.post('/login', async (req, res) => {
    
        let dados = req.body

        var database = require('../config/database')()
        
        let usuarios = require("../models/usuarios")
        
        var verificarEmail = await usuarios.findOne({ email:dados.email, password: dados.password })
        
        if (!verificarEmail) {
            return res.send("email ou senha não encontradas")
        }
        
        res.redirect(`/profile?id=${verificarEmail._id}`)
    })
}
    