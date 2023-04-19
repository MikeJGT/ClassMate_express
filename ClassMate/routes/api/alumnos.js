const router = require('express').Router();
const { getAlumnosByClaseId } = require('../../models/alumno.model');


router.get('/:claseId', async (req, res) => {
    const { claseId } = req.params;
    try {
        const [alumnos] = await getAlumnosByClaseId(claseId);
        res.json(alumnos);
    } catch (erro) {
        res.json({ fatal: error.message });
    }
})

module.exports = router;