
/*Sacar observaciones de los alumnos por padreID*/
const getObservacionByTutorID = (tutorid) => {
    return db.query(`SELECT o.*,pad.padre_id,u.nombre FROM padre_has_alumnos as pad
JOIN  usuarios as u on u.id = pad.alumno_id
JOIN observacion as o on o.alumno_id = u.id
where u.rol = "alumno"
AND pad.padre_id = ?;`, [tutorid])
}
/*Sacar todos los tutores*/
const getAllTutor = () => {
    return db.query("SELECT * FROM usuarios where rol = 'tutor';")
}

module.exports = {
    getObservacionByTutorID,
    getAllTutor
}