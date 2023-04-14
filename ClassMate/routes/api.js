const router = require('express').Router();

// Usuarios
router.use('/usuarios', require('./api/usuarios'));

// Profesores
router.use('/profesor', require('./api/profesor'));



module.exports = router;
