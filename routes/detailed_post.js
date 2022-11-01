module.exports = (app)=> {

    let conexao = require('../config/database')

    app.get('/detailed_post', async(req,res)=> {
        conexao()

        let user = req.query.id
        let postId = req.query.idPost


        let postings = require("../models/posting")

        let post = await postings.findOne({_id:postId})

        console.log(post)

        res.render('detailed_post', {
            id: user,
            post:post
        })
    })
}