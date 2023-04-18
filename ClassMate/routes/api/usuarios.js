const { createToken } = require('../../helpers/utils');
const { create, getByEmail, getByTutorId, getTutor, getById, getTutorByName } = require('../../models/usuario.model');

const router = require('express').Router();

//Regitro de usuario
router.post('/registro', async (req, res) => {
    //res.send('Funciona')
    try {
        const [result] = await create(req.body);
        res.json(result);

    } catch (error) {
        res.json({ fatal: error.message })
    }
})

//Login para usuario
router.post('/login', async (req, res) => {
    //res.send('Funciona');
    try {
        const [result] = await getByEmail(req.body.email);
        //Si no existe email
        if (result.length === 0) {
            return res.json({ fatal: 'Error en contraseña o email' })
        }

        const usuario = result[0];
        console.log(usuario);

        res.json({
            success: 'Login success',
            token: createToken(usuario)
        });
    } catch (error) {
        res.json({ fatal: error.message });
    }
})

// Recuperar Usuario por nombre
router.get('/tutor/:nombre', async (req, res) => {
    const { nombre } = req.params
    try {
        const [tutor] = await getTutorByName(nombre)
        console.log(tutor)
        res.json(tutor)
    } catch (error) {
        res.json({ fatal: error.message })
    }
})

// Usuario alumnos por tutorId
router.get('/tutor/:tutorId', async (req, res) => {
    const { tutorId } = req.params
    try {
        const [alumnos] = await getByTutorId(tutorId);
        res.json(alumnos);
    } catch (error) {
        res.json({ fatal: error.message })
    }
})

// Usuario tutor
router.get('/tutor', async (req, res) => {
    try {
        const [tutor] = await getTutor();
        res.json(tutor)
    } catch (error) {
        res.json({ fatal: error.message })
    }
})

// Usuario por Id
router.get('/:userId', async (req, res) => {
    const { userId } = req.params
    try {
        const [user] = await getById(userId)
        res.json(user)
    } catch (error) {
        res.json({ fatal: error.message })
    }
})





module.exports = router