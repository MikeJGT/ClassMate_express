//Query insetar tarea
const insertTarea = ({ asignaturas_id, clases_id, titulo, contenido, fecha_entrega }) => {
    return db.query('INSERT INTO escuelabeta_definitivo.tareas (asignaturas_id,clases_id,titulo, contenido, fecha_entrega) values (?,?,?,?,?)',
        [asignaturas_id, clases_id, titulo, contenido, fecha_entrega]
    );
}

//Query de sacar tarea por claseID
const getTaskByClassId = (classId) => {
    return db.query(`SELECT t.*, asig.nombre as "asignatura", c.nombre as "clase"  FROM escuelabeta_definitivo.tareas as t
    JOIN escuelabeta_definitivo.clases as c on c.id = t.clases_id
    JOIN escuelabeta_definitivo.asignaturas as asig ON asig.id = t.asignaturas_id 
    where clases_id = ?`,
        [classId]
    );
}
//Query de moficar tarea
const modifyTarea = ({ titulo }, tareaId) => {
    return db.query('UPDATE escuelabeta_definitivo.tareas SET tareas.titulo = ? WHERE tareas.id = ?', [titulo, tareaId]);
}

//Query borrar tarea
const deleteTarea = (tareaId) => {
    return db.query('DELETE FROM escuelabeta_definitivo.tareas WHERE tareas.id = ? ',
        [tareaId]
    )
}

module.exports = {
    insertTarea,
    getTaskByClassId,
    modifyTarea,
    deleteTarea
}