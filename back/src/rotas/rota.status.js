const { Router } = require('express');

const rotaStatus = Router()

//Rota de confirmação de conexão
rotaStatus.get('/status', (req, res) => {
    res.status(200).send('Conexão Estabelecida')
})

module.exports = rotaStatus