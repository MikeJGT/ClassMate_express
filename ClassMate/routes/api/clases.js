const { getClaseByAlumnoID, getAllClases, getClaseById } = require('../../models/clase.model');

const router = require('express').Router();

//get Todas las clases
router.get('/', async (req, res) => {
    try {
        const [clases] = await getAllClases();
        res.json(clases);
    } catch (error) {
        res.json({ fatal: error.message });
    }
})

//Get clase por claseId
router.get('/:claseId', async (req, res) => {
    const { claseId } = req.params;
    try {
        const [clase] = await getClaseById(claseId);
        res.json(clase);
    } catch (error) {
        res.json({ fatal: error.message });
    }
})

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