const { createToken } = require('../../helpers/utils');
const { create, getByEmail } = require('../../models/usuario.model');

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

module.exports = router