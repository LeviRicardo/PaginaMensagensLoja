const { Router } = require('express');
const MensagensRepo = require('../repo/mensagens.repo');

const rotaMensagens = Router()

//Rota de aquisição das mensagens
rotaMensagens.get('/mensagens', async (req, res) => {
    const mensagens = await MensagensRepo.getAllMessages()
    res.status(200).send(mensagens)
})

//Rota de envio de mensagens
rotaMensagens.put('/mensagens', async (req, res) => {
    const mensagem = req.body
    await MensagensRepo.sendMessage(mensagem)
    res.status(201).send()
})

module.exports = rotaMensagens