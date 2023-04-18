const getAllClases = () => {
    return db.query(`SELECT c.id as 'clase_id', c.nombre  FROM escuelabeta_definitivo.clases as c;`);
}


const getClaseByAlumnoID = (alumId) => {
    return db.query(`SELECT alum.*  FROM escuelabeta_definitivo.alumnos_has_clases  as  alum
    JOIN escuelabeta_definitivo.usuarios as u on u.id = alum.alumno_id
    JOIN escuelabeta_definitivo.tareas as t on t.clases_id = alum.clases_id
    where alum.alumno_id = ?
`, [alumId]);
}

const getClaseById = (claseId) => {
    return db.query(`SELECT c.id,c.nombre as 'clase' FROM escuelabeta_definitivo.clases as c
    where c.id = ?;`, [claseId]);
}
module.exports = {
    getClaseByAlumnoID,
    getAllClases,
    getClaseById
}