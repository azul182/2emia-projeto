module.exports = (app)=> {
    app.get('/feed', (req,res)=> {
        res.render('feed')
    })
}