module.exports = (app)=> {
    app.get('/detailed_post', (req,res)=> {
        res.render('detailed_post')
    })
}