
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


module.exports = {
    getAllAsignaturas,
    getAsignaturaByClaseId,
    crearAsignatura
}