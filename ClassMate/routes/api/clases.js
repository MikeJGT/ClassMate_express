const { getClaseByAlumnoID } = require('../../models/clase.model');

const router = require('express').Router();

//Get Clase por alumno ID
router.get('/alumnos/:alumnoID', async (req, res) => {
    const { alumnoID } = req.params;
    try {
        const [clase] = await getClaseByAlumnoID(alumnoID);
        res.json(clase);
    } catch (error) {
        res.json({ fatal: error.message })
    }
})

module.exports = router