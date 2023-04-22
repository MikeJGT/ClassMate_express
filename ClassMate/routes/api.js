const { checkToken } = require('../helpers/middlewares');

const router = require('express').Router();

// Usuarios
router.use('/usuarios', require('./api/usuarios'));

// Profesores
router.use('/profesor', checkToken, require('./api/profesor'));

// Conversacion
router.use('/conversacion', require('./api/conversacion'));

// Tareas
router.use('/tarea', require('./api/tarea'));

// Horario
router.use('/horario', require('./api/horario'));

//Clase
router.use('/clase', require('./api/clases'));

//asignatura
router.use('/asignatura', require('./api/asignaturas'));


//Alumnos
router.use('/alumnos', require('./api/alumnos'));

//Tutor
router.use('/tutor', require('./api/tutor'));

//Calificacion
router.use('/calificacion', require('./api/calificacion'));

module.exports = router;
