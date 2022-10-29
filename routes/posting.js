let user
module.exports = (app) => {

    let database = require('../config/database')

    let posting = require('../models/posting')

    let { upload, multer } = require('../config/multer')

    app.get('/posting', (req, res) => {
        user = req.query.id


        if (user) {
            res.render('posting', {
                id: user
            })
        } else {
            res.render('posting_loggedout', {
                id: user
            })
        }

    })

    app.post('/posting', (req, res) => {

        let dados = req.body


        upload(req, res, async (err) => {
            if (err instanceof multer.MulterError) {
                res.send("arquivo maior de 1000kb")
            } else if (err) {
                res.send("tipo de arquivo invalido")
            } else {
                database()
                let documento = await new posting({
                    file: dados.image,
                    title:dados.title,
                    description:req.description,
                    userId:user
                }).save()
                .then(() => {
                    res.redirect(`/feed?id=${user}`)
                })
                .catch(() => {
                    res.send('Não foi possível salvar')
                })
                
                
            }
        })



    })
}