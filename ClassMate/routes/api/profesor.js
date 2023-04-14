const router = require('express').Router();

const { getAlumnos, insertSubject, getAlumno } = require('../../models/profesor.model');

// Ver Alumnos
router.get('/alumno', async (req, res) => {
    try {
        const [result] = await getAlumnos();
        console.log(result);
        res.json(result);
    } catch (error) {
        res.json({ fatal: 'No hay alumnos' })
    }
});

// Ver un Alumno en particular
router.get('/alumno/:alumnoId', async (req, res) => {
    const { alumnoId } = req.params
    try {
        const [alum] = await getAlumno(alumnoId)
        res.json(alum)
    } catch (error) {
        res.json({ fatal: error.message })
    }
});



// Insertar Asignatura
router.post('/asignatura/:profesorId', async (req, res) => {
    const { profesorId } = req.params

    try {
        const [asig] = await insertSubject(profesorId)
        res.json(asig)
    } catch (error) {
        res.json({ fatal: error.message })
    }
    console.log(req.params)
})


module.exports = router