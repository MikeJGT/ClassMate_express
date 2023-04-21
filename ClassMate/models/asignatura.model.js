
const getAllAsignaturas = () => {
    return db.query(`SELECT a.id ,a.nombre as 'asignatura',a.profesor_id ,u.nombre as 'profesor' FROM escuelabeta_definitivo.asignaturas as a
    join escuelabeta_definitivo.usuarios as u on a.profesor_id=u.id;`);
}

const getAsignaturaByClaseId = (claseId) => {
    return db.query(`SELECT  distinct a.id,a.nombre as 'asignatura'  FROM clases as c
join horario as h on c.id=h.clases_id
left join asignaturas as a on h.asignaturas_id=a.id
where c.id=?;`, [claseId]);
}

const crearAsignatura = ({ nombre }, profesorId) => {
    return db.query(`INSERT INTO asignaturas (nombre, profesor_id) VALUES (?, ?)`, [nombre, profesorId])
}

const getAsignaturaByAlumnoId = (alumnoId) => {
    return db.query(`SELECT distinct asig.nombre, alum.clases_id, alum.alumno_id FROM asignaturas as asig
JOIN horario as h on asig.id =  h.asignaturas_id 
JOIN clases as cla on   cla.id = h.clases_id
JOIN alumnos_has_clases as alum on alum.clases_id = cla.id 
where alum.alumno_id = ?
AND current = 1`, [alumnoId])
}


module.exports = {
    getAllAsignaturas,
    getAsignaturaByClaseId,
    crearAsignatura,
    getAsignaturaByAlumnoId
}