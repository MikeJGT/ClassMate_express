const { InsertConversation, getConversacionById } = require('../../models/conversacion.model');

const router = require('express').Router();

//insertar conversacion
router.post('/', async (req, res) => {
    try {
        const [asunto] = await InsertConversation(req.body)
        console.log(asunto)
        res.json(asunto)
    } catch (error) {
        res.json({ fatal: 'No has guardado asunto' })
    }
});

// Recuperar conversacion
router.get('/:conversacionId', async (req, res) => {
    const { conversacionId } = req.params
    try {
        const [asunto] = await getConversacionById(conversacionId)
        res.json(asunto)
    } catch (error) {
        res.json({ fatal: 'No hay asuntos' })
    }
})


module.exports = router;