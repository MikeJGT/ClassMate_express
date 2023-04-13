const create = ({ nombre, apellidos, dni, email, password, rol, genero, direccion, nacimiento }) => {
    return db.query('INSERT INTO escuelabeta_definitivo.usuarios (nombre, apellidos, dni, email, password, rol, genero, direccion, nacimiento)VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nombre, apellidos, dni, email, password, rol, genero, direccion, nacimiento]
    );
}

module.exports = { create };
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