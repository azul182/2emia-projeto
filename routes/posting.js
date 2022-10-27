module.exports = (app)=> {
    app.get('/posting', (req,res)=> {
        let user = req.query.id
        
        if(user){
            res.render('posting',{id:user})
        }else{
            res.render('posting_loggedout',{id:user})
        }
        
    })
    
    app.post('/posting',(req,res)=>{
        

        let dados = req.body
        let user = req.query.id
        
        console.log(dados)

        res.render('feed',{id:user})
    })
}