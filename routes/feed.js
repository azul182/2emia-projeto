module.exports = (app) => {

    let conexao = require('../config/database')

    app.get('/feed', async (req, res) => {
        conexao()

        let user = req.query.id

        let postings = require("../models/posting")

        let posts = await postings.find().sort({
            '_id': -1
        })

        const qty = posts.length / 2
        const chunks = posts.reduce((array, item, index) => {
            const chunkIndex = Math.floor(index / qty)
            if (!array[chunkIndex]) {
                array[chunkIndex] = []
            }
            array[chunkIndex].push(item)
            return array
        }, [])

        res.render('feed', {
            id: user,
            chunks: chunks
        })
    })
}