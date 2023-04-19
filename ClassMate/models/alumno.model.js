const getAlumnosByClaseId = (claseId) => {
    return db.query(`SELECT u.*, cla.nombre as clase FROM alumnos_has_clases as alum
    JOIN usuarios as u on u.id = alum.alumno_id
    LEFT JOIN clases as cla on cla.id = alum.clases_id
    where alum.clases_id = ?
    AND current = 1`, [claseId]);
}



module.exports = {
    getAlumnosByClaseId
}