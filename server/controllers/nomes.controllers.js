//importaçao do banco e modelos
const db = require('../models')
const Nome = db.nomes
const { Router } = require("express")
const router = Router();
const api_adress = "http://localhost:3000/api/urlramdom/"


router.get('/list', async (req, res) => {
    let nomes = await Nome.findOne({where:{id:2}})
    res.status(200).json(nomes)
})

router.post('/create', async (req, res) => {
    createNome = {
        nomes: req.body.nomes
    }
    let response = await Nome.create(createNome)
    res.status(200).json(response)
})

module.exports = router;