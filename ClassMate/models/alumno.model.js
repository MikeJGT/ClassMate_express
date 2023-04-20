const getAlumnosByClaseId = (claseId) => {
    return db.query(`SELECT u.*, cla.nombre as clase FROM alumnos_has_clases as alum
    JOIN usuarios as u on u.id = alum.alumno_id
    LEFT JOIN clases as cla on cla.id = alum.clases_id
    where alum.clases_id = ?
    AND current = 1`, [claseId]);
}

const getAlumnosWithClassId = () => {
    return db.query(`SELECT u.*,cla.id as clases_id, alum.current  FROM escuelabeta_definitivo.usuarios as u
JOIN alumnos_has_clases as alum on u.id = alum.alumno_id
LEFT JOIN clases as cla on cla.id = alum.clases_id
where current = 1;`)
}

const insertAlumnosByClassID = ({ alumno_id, clases_id }) => {
    return db.query(`INSERT INTO alumnos_has_clases (alumno_id, clases_id, current) VALUES(?,?,1);`,
        [alumno_id, clases_id]);
}

const deleteAlumnoById = (idAlumno) => {
    return db.query(`DELETE FROM alumnos_has_clases WHERE id =?;`, [idAlumno])
}

module.exports = {
    getAlumnosByClaseId,
    getAlumnosWithClassId,
    insertAlumnosByClassID,
    deleteAlumnoById
}