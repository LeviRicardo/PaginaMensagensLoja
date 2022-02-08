const express = require('express');
const rotaMensagens = require('./rotas/rota.mensagens');
const rotaStatus = require('./rotas/rota.status');
const cors = require('cors')

const app = express()
const porta = 5000

//Configs do express
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

//Configs de rotas
app.use(rotaStatus)
app.use(rotaMensagens)

//Inicialização do servidor
app.listen(porta, () => {
    console.log(`Servidor aberto em localhost:${porta}`)
})