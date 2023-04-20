const { insertHorario, getHorarioByClaseId, updateHorario, deleteHorarioClaseId, getHorarioByProfesorId } = require('../../models/horario.model');

const router = require('express').Router();


// Recuperar horario para profesores
router.get('/profesor/:profesorId', async (req, res) => {
    const { profesorId } = req.params

    try {
        const [horarioProfe] = await getHorarioByProfesorId(profesorId)
        res.json(horarioProfe)
    } catch (error) {
        res.json({ fatal: error.message })
    }
});


// Recuperar horario por Clase
router.get('/:claseId', async (req, res) => {

    const { claseId } = req.params

    try {
        const [horario] = await getHorarioByClaseId(claseId)
        res.json(horario)
    } catch (error) {
        res.json({ fatal: error.message })
    }
});



// Modificar horario de la Clase
router.put('/:claseId', async (req, res) => {
    const { claseId } = req.params

    try {
        const [updatedHorario] = await updateHorario(req.body, claseId)
        res.json(updatedHorario)
    } catch (error) {
        res.json({ fatal: error.message })
    }
});


// Insertar horario
router.post('/', async (req, res) => {
    try {
        const [horario] = await insertHorario(req.body)
        res.json(horario)
    } catch (error) {
        res.json({ fatal: error.message })
    }
})


// Borrar horario de la clase
router.delete('/:claseId', async (req, res) => {
    const { claseId } = req.params

    try {
        const [deletedHorario] = await deleteHorarioClaseId(claseId)
        res.json(deletedHorario)
    } catch (error) {
        res.json({ fatal: error.message })
    }
});





module.exports = router;