
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
    return db.query(`SELECT u.* FROM escuelabeta_definitivo.padre_has_alumnos as tut
    JOIN escuelabeta_definitivo.usuarios as u on u.id = tut.alumno_id
    WHERE tut.padre_id = ?`, [tutorId]);
}

// Buscar usuario tutor
const getTutor = () => {
    return db.query("SELECT * FROM escuelabeta_Definitivo.usuarios where usuarios.rol = 'tutor'")
}

module.exports = {
    create,
    getByEmail,
    getById,
    getByTutorId,
    getTutor
};
/*
nombre varchar(100) 
apellidos varchar(100) 
dni varchar(9) 
email varchar(60) 
password varchar(255) 
rol enum('tutor', 'profesor', 'alumno', 'director') 
genero enum('f', 'm') 
direccion tinytext
nacimiento*/