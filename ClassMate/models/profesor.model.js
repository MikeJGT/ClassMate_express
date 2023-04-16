
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

module.exports = { getAlumnos, insertSubject, getAlumno }