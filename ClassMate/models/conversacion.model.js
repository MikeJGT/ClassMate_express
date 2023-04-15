// insertar asunto
const InsertConversation = ({ asunto }) => {
    return db.query('INSERT INTO escuelabeta_definitivo.conversaciones (asunto) VALUES (?);', [asunto])
};

// ver conversación
const getConversacionById = (asuntoId) => {
    return db.query('SELECT * FROM escuelabeta_Definitivo.conversaciones WHERE id = ?', [asuntoId])
}


module.exports = { InsertConversation, getConversacionById }