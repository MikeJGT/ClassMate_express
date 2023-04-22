const { insertCalificacionDefault, getAllNotasByAlumnoId, updateNota } = require("../../models/calificacion.model");
const router = require('express').Router();


router.post('/', async (req, res) => {

    try {
        const [calificacion] = await insertCalificacionDefault(req.body);
        res.json(calificacion);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});


router.post('/update', async (req, res) => {
    try {
        const [calificacion] = await updateNota(req.body);
        res.json(calificacion);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post('/all', async (req, res) => {

    try {
        const [calificaciones] = await getAllNotasByAlumnoId(req.body);
        res.json(calificaciones);
    } catch (error) {
        res.json({ fatal: error.message })
    }
})

module.exports = router