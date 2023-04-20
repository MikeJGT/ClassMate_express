const router = require('express').Router();
const { getAlumnosByClaseId, getAlumnosWithClassId, insertAlumnosByClassID, deleteAlumnoById } = require('../../models/alumno.model');

//Recupera Alumnos con classID
router.get('/clases', async (req, res) => {
    try {
        const [alumno] = await getAlumnosWithClassId()
        res.json(alumno)
    } catch {
        res.json({ fatal: error.message })
    }
})

router.get('/:claseId', async (req, res) => {
    const { claseId } = req.params;
    try {
        const [alumnos] = await getAlumnosByClaseId(claseId);
        res.json(alumnos);
    } catch (erro) {
        res.json({ fatal: error.message });
    }
})

router.post('/alumnoByClass', async (req, res) => {

    try {
        const [newAlumnos] = await insertAlumnosByClassID(req.body);
        res.json(newAlumnos);
    } catch (error) {
        res.json({ fatal: error.message })
    }
})
router.delete('/:idAlumno', async (req, res) => {
    const { idAlumno } = req.params
    try {
        const [removeAlumnos] = await deleteAlumnoById(idAlumno);
        res.json(removeAlumnos)
    } catch (error) {
        res.json({ fatal: error.message })
    }
})
module.exports = router;