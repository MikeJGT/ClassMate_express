
const getAllAsignaturas = () => {
    return db.query(`SELECT a.id ,a.nombre as 'asignatura',a.profesor_id ,u.nombre as 'profesor' FROM escuelabeta_definitivo.asignaturas as a
    join escuelabeta_definitivo.usuarios as u on a.profesor_id=u.id;`);
}

module.exports = {
    getAllAsignaturas
}