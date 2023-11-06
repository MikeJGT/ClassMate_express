const router = require('express').Router();

const { getAlumnos, insertSubject, getAlumno, inserObservation, getAllProfesor } = require('../../models/profesor.model');

// Ver Alumnos
router.get('/alumno', async (req, res) => {
    try {
        const [result] = await getAlumnos();
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
        const [asig] = await insertSubject(req.body, profesorId)
        res.json(asig)
    } catch (error) {
        res.json({ fatal: error.message })
    }
})

//Insertar Observacion
router.post('/observacion', async (req, res) => {
    try {
        const [observacion] = await inserObservation(req.body)
        res.json(observacion);
    } catch (error) {
        res.json({ fatal: error.message });
    }
})
//Sacar todos los profesores
router.get('/all', async (req, res) => {
    try {
        const [profesor] = await getAllProfesor()
        res.json(profesor);
    } catch (error) {
        res.json({ fatal: error.message })
    }
})

module.exports = router
