

const insertCalificacionDefault = ({ alumno_id, asignaturas_id }) => {
    return db.query(`insert into escuelabeta_definitivo.calificacion (alumno_id,asignaturas_id) values (?,?);`, [alumno_id, asignaturas_id]);
}

const getAllNotasByAlumnoId = ({ alumno_id, clases_id }) => {
    return db.query(`SELECT h.id as hid,h.clases_id,c.*,a.nombre as asignatura FROM  escuelabeta_definitivo.horario as h
    join  escuelabeta_definitivo.calificacion as c on h.asignaturas_id=c.asignaturas_id
    join escuelabeta_definitivo.asignaturas as a on h.asignaturas_id=a.id
    where c.alumno_id=? and h.clases_id=?;`, [alumno_id, clases_id]);
}

const updateNota = ({ nota, id }) => {
    return db.query(`update escuelabeta_definitivo.calificacion set nota=? where id=?;`, [nota, id]);
}
module.exports = {
    insertCalificacionDefault,
    getAllNotasByAlumnoId,
    updateNota
}