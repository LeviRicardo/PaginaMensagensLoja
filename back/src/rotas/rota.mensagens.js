const { Router } = require('express');

const rotaMensagens = Router()

//Rota de confirmação de conexão
rotaMensagens.get('/mensagens', (req, res) => {
    res.status(200).send([
        {
            "id": "idaleatoruio1",
            "email": "emailaleatorio1@mail.com",
            "message": "Mensagem Aleatória 1",
            "created_at": "data-aleatoria-1"
        },
        {
            "id": "idaleatoruio2",
            "email": "emailaleatorio2@mail.com",
            "message": "Mensagem Aleatória 2",
            "created_at": "data-aleatoria-2"
        },
        {
            "id": "idaleatoruio3",
            "email": "emailaleatorio3@mail.com",
            "message": "Mensagem Aleatória 3",
            "created_at": "data-aleatoria-3"
        },
        {
            "id": "idaleatoruio4",
            "email": "emailaleatorio4@mail.com",
            "message": "Mensagem Aleatória 4",
            "created_at": "data-aleatoria-4"
        }
    ])
})

module.exports = rotaMensagens