
//Crear usuario en registro
const create = ({ nombre, apellidos, dni, email, password, rol, genero, direccion, nacimiento }) => {
    return db.query('INSERT INTO escuelabeta_definitivo.usuarios (nombre, apellidos, dni, email, password, rol, genero, direccion, nacimiento)VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nombre, apellidos, dni, email, password, rol, genero, direccion, nacimiento]
    );
}

//Busco usuario por email
const getByEmail = (email) => {
    return db.query('SELECT * FROM escuelabeta_definitivo.usuarios where usuarios.email = ?',
        [email]
    );
}

// Busco usuario por id
const getById = (userId) => {
    return db.query('SELECT * FROM escuelabeta_definitivo.usuarios where id = ?', [userId])
};

//Busco usuario de alumnos(hijos) por TutorId
const getByTutorId = (tutorId) => {
    return db.query(`SELECT u.*, cla.nombre as clase, cla.id as clases_id FROM escuelabeta_definitivo.padre_has_alumnos as tut
    JOIN escuelabeta_definitivo.usuarios as u on u.id = tut.alumno_id
    JOIN escuelabeta_definitivo.alumnos_has_clases as alum on alum.alumno_id = tut.alumno_id
    LEFT JOIN clases cla ON cla.id = alum.clases_id
    WHERE tut.padre_id = ?
    AND alum.current = 1;`, [tutorId]);
}

// Buscar usuario tutor
const getTutor = () => {
    return db.query("SELECT * FROM escuelabeta_Definitivo.usuarios where usuarios.rol = 'tutor'")
}

// Buscar usuario por rol y nombre
const getTutorByName = (nombreUsuario) => {
    return db.query(`SELECT * FROM escuelabeta_Definitivo.usuarios where usuarios.nombre LIKE ? AND rol = 'tutor'`, [`%${nombreUsuario}%`])
}

const getGeneroByID = (id) => {
    return db.query(`SELECT u.genero FROM escuelabeta_definitivo.usuarios as u where u.id=?;`, [id])

}

module.exports = {
    create,
    getByEmail,
    getById,
    getByTutorId,
    getTutor,
    getTutorByName,
    getGeneroByID
};
