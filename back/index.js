const express = require('express');
const rotaMensagens = require('./src/rotas/rota.mensagens');
const rotaStatus = require('./src/rotas/rota.status');
const cors = require('cors')

const app = express()
const porta = 5000

//Configs do express
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Configs de rotas
app.use(cors())
app.use(rotaStatus)
app.use(rotaMensagens)

//Inicialização do servidor
app.listen(porta, () => {
    console.log(`Servidor aberto em localhost:${porta}`)
})