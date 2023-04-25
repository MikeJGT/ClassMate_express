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
const InsertMessage = ({ contenido, emisor_id, receptor_id, conversaciones_id }) => {
    return db.query('INSERT INTO escuelabeta_definitivo.mensaje (contenido,emisor_id,receptor_id,conversaciones_id) VALUES (?,?,?,?);', [contenido, emisor_id, receptor_id, conversaciones_id])
}

// Recuperar mensajes por conversación
const getMensajeByConversacionId = (conversacionId) => {
    return db.query(`SELECT u2.nombre as 'emisor',u.nombre as 'receptor',m.* FROM escuelabeta_definitivo.mensaje as m 
    join escuelabeta_definitivo.usuarios as u on u.id=m.receptor_id
    join escuelabeta_definitivo.usuarios as u2 on u2.id=m.emisor_id
    where m.conversaciones_id=?
    order by fecha desc;`, [conversacionId])
}

// Recuperar Conversaciones
const getConversaciones = () => {
    return db.query('SELECT * FROM escuelabeta_Definitivo.conversaciones')
}

//Delete mensaje by Id
const deleteMensajeById = (idMensaje) => {
    return db.query('DELETE FROM mensaje WHERE mensaje.id = ?;', [idMensaje])
}
module.exports = { InsertConversation, getConversacionById, InsertMessage, getMensajeByConversacionId, getConversaciones, deleteMensajeById }