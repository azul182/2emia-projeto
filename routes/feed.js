module.exports = (app)=> {
    app.get('/feed', (req,res)=> {
        let user = req.query.id

        res.render('feed',{id:user})
    })
}