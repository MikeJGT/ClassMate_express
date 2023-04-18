const getAllClases = () => {

}


const getClaseByAlumnoID = (alumId) => {
    return db.query(`SELECT alum.*  FROM escuelabeta_definitivo.alumnos_has_clases  as  alum
    JOIN escuelabeta_definitivo.usuarios as u on u.id = alum.alumno_id
    JOIN escuelabeta_definitivo.tareas as t on t.clases_id = alum.clases_id
    where alum.alumno_id = ?
`, [alumId]);
}

module.exports = {
    getClaseByAlumnoID
}