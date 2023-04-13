const { create } = require('../../models/usuario.model');

const router = require('express').Router();


router.post('/registro', async (req, res) => {
    //res.send('Funciona')
    try {
        const [result] = await create(req.body);
        res.json(result);

    } catch (error) {
        res.json({ fatal: error.message })
    }
})
router.post('/login', (req, res) => {
    res.send('Funciona');
})

module.exports = router