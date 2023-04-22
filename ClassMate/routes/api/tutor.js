const { getObservacionByTutorID, getAllTutor } = require('../../models/tutor.model');

const router = require('express').Router();
/*Recupera datos de observacion de los alumnos de tutorID*/
router.get('/observacion/:tutorId', async (req, res) => {
    const { tutorId } = req.params;
    try {
        const [observacion] = await getObservacionByTutorID(tutorId);
        res.json(observacion);
    } catch (error) {
        res.json({ fatal: error.message })
    }
})

/*Recupera todos los tutores*/

router.get('/all', async (req, res) => {
    try {
        const [tutor] = await getAllTutor()
        res.json(tutor);
    } catch (error) {
        res.json({ fatal: error.message })
    }
})

module.exports = router