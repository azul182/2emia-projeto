module.exports = (app)=> {
    app.get('/signin', (req,res)=> {
        res.render('signin')
    })

    app.post('/signin',async(req,res)=>{
        let dados = req.body

        let database = require("../config/database")()

        let usuarios = require("../models/usuarios")

        let verificar = await usuarios.findOne({email:dados.email})
        if(verificar){
            return res.send("Email já cadastrado")
        }

        let documentos = await new usuarios({  
            name:dados.name,
            email:dados.email,
            password:dados.password,
        }).save()
        res.redirect('/login')
    })
}