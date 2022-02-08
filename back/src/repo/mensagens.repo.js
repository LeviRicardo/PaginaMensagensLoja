const db = require("../db")

class MensagensRepo {
    //GET
    async getAllMessages() {
        const query = "SELECT id, email, message, created_at FROM Mensagens ORDER BY id DESC"
        const {rows} = await db.query(query)
        return rows || []
    }

    //PUT
    async sendMessage(mensagem) {
        const query = "INSERT INTO Mensagens (email, message, created_at) VALUES ($1, $2, now())"
        const valores = [mensagem.email, mensagem.message]
        await db.query(query, valores)
    }
}

module.exports = new MensagensRepo