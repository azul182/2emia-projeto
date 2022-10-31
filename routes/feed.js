module.exports = (app)=> {

    let conexao = require('../config/database')

    app.get('/feed', async(req,res)=> {
        conexao()

        let user = req.query.id

        let postings = require("../models/posting")

        let posts = await postings.find().sort({'_id':-1})

        console.log(posts),


        res.render('feed',{id:user, posts:posts})
    })
}