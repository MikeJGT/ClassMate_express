const { checkToken } = require('../helpers/middlewares');

const router = require('express').Router();

// Usuarios
router.use('/usuarios', require('./api/usuarios'));

// Profesores
router.use('/profesor', checkToken, require('./api/profesor'));



module.exports = router;
