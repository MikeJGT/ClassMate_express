
// Ver Alumnos
const getAlumnos = () => {
    return db.query("SELECT * FROM escuelabeta_Definitivo.usuarios where rol = 'alumno'");
}

// Ver un Alumno en Particular
const getAlumno = (idAlumno) => {
    return db.query(`SELECT u.*
FROM escuelabeta_Definitivo.usuarios AS u
JOIN padre_has_alumnos pa ON u.id = pa.alumno_id
WHERE u.rol = 'alumno' AND pa.alumno_id = ?`, [idAlumno])
}


// Insertar asignatura
const insertSubject = (idProfesor) => {
    return db.query("INSERT INTO asignaturas (nombre, profesor_id) VALUES('Fisica',? ) ", [idProfesor])
}

module.exports = { getAlumnos, insertSubject, getAlumno }