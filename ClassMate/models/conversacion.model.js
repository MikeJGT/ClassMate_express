// insertar asunto
const InsertConversation = ({ asunto }) => {
    return db.query('INSERT INTO escuelabeta_definitivo.conversaciones (asunto) VALUES (?);', [asunto])
};

// ver conversación
const getConversacionById = (asuntoId) => {
    return db.query('SELECT * FROM escuelabeta_Definitivo.conversaciones WHERE id = ?', [asuntoId])
}

// MENSAJES

// insertar mensaje
const InsertMessage = ({ contenido, emisor_id, receptor_id, conversaciones_id, fecha }) => {
    return db.query('INSERT INTO escuelabeta_definitivo.mensaje (contenido,emisor_id,receptor_id,conversaciones_id,fecha) VALUES (?,?,?,?,?);', [contenido, emisor_id, receptor_id, conversaciones_id, fecha])
}

// Recuperar mensajes por conversación
const getMensajeByConversacionId = (conversacionId) => {
    return db.query('SELECT * FROM escuelabeta_definitivo.mensaje WHERE conversaciones_id = ?;', [conversacionId])
}

// Recuperar Conversaciones
const getConversaciones = () => {
    return db.query('SELECT * FROM escuelabeta_Definitivo.conversaciones')
}


module.exports = { InsertConversation, getConversacionById, InsertMessage, getMensajeByConversacionId, getConversaciones }