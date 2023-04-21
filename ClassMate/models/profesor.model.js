
// Ver Alumnos
const getAlumnos = () => {
    return db.query("SELECT * FROM escuelabeta_Definitivo.usuarios where rol = 'alumno'");
}

// Ver un Alumno en Particular 
const getAlumno = (idAlumno) => {
    return db.query(`SELECT * FROM usuarios WHERE id = ? AND rol = 'alumno';`, [idAlumno])
}


// Insertar asignatura
const insertSubject = ({ nombre }, idProfesor) => {
    return db.query("INSERT INTO asignaturas (nombre, profesor_id) VALUES(?,? ) ", [nombre, idProfesor])
}

//Insertar observacion
const inserObservation = ({ titulo, contenido, alumno_id }) => {
    return db.query("INSERT INTO observacion(titulo, contenido, alumno_id)values(?,?,?);",
        [titulo, contenido, alumno_id])
}

module.exports = { getAlumnos, insertSubject, getAlumno, inserObservation }