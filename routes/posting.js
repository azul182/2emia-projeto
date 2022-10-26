module.exports = (app)=> {
    app.get('/posting', (req,res)=> {
        res.render('posting')
    })
}