// Insertar horario

const insertHorario = ({ inicio, fin, dia, asignaturas_id, clases_id }) => {
    return db.query('INSERT INTO escuelabeta_Definitivo.horario (inicio,fin,dia,asignaturas_id,clases_id) VALUES (?,?,?,?,?);', [inicio, fin, dia, asignaturas_id, clases_id])
};

// Recuperar horario por ClaseId

const getHorarioByClaseId = (claseId) => {
    return db.query(`SELECT h.*, asig.nombre as "asignatura", c.nombre as "clase" FROM escuelabeta_Definitivo.horario as h
                    JOIN escuelabeta_Definitivo.clases as c on c.id = h.clases_id
                    JOIN escuelabeta_Definitivo.asignaturas as asig on asig.id = h.asignaturas_id
                    where clases_id = ?;`, [claseId])
};

// Modificar Horario

const updateHorario = ({ inicio, fin, dia }, claseId) => {
    return db.query(`UPDATE escuelabeta_definitivo.horario SET horario.inicio = ? ,horario.fin = ?, dia = ?  WHERE clases_id = ?;`, [inicio, fin, dia, claseId])
};

// Borrar Horario Por ClaseId

const deleteHorarioClaseId = (claseId) => {
    return db.query(`DELETE  FROM escuelabeta_definitivo.horario WHERE horario.clases_id = ?;`, [claseId])
};

// Recuperar Horario profesorId

const getHorarioByProfesorId = (profesorId) => {
    return db.query(`SELECT h.*,asig.nombre as "asignatura", c.nombre as "clase", u.nombre as "profesor" FROM escuelabeta_Definitivo.horario as h
                    JOIN escuelabeta_Definitivo.asignaturas as asig on asig.profesor_id = h.asignaturas_id
                    JOIN escuelabeta_Definitivo.clases as c on c.id = h.clases_id
                    JOIN escuelabeta_Definitivo.usuarios as u on u.id = asig.profesor_id
                    where profesor_id = ?;`, [profesorId])
};


module.exports = {
    insertHorario,
    getHorarioByClaseId,
    updateHorario,
    deleteHorarioClaseId,
    getHorarioByProfesorId

}