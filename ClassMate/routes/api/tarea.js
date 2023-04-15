const { insertTarea, getTaskByClassId, modifyTarea, deleteTarea } = require('../../models/tarea.model');

const router = require('express').Router();

//Sacar tarea por claseID
router.get('/clase/:classid', async (req, res) => {
    const { classid } = req.params
    try {
        const [tarea] = await getTaskByClassId(classid);
        res.json(tarea);
    } catch (error) {
        res.json({ fatal: error.message });
    }
})
//Introducir tarea
router.post('/', async (req, res) => {
    try {
        const [newTarea] = await insertTarea(req.body);
        res.json(newTarea);
    } catch (error) {
        res.json({ fatal: error.message });
    }
})

//Modificar tarea
router.put('/:tareaId', async (req, res) => {
    const { tareaId } = req.params
    try {
        const [tarea] = await modifyTarea(req.body, tareaId);
        res.json(tarea);
    } catch (error) {
        res.json({ fatal: error.message })
    }
})

//Borrar una tarea
router.delete('/:tareaId', async (req, res) => {
    const { tareaId } = req.params;
    try {
        const [removeTarea] = await deleteTarea(tareaId)
        res.json(removeTarea);
    } catch (error) {
        res.json({ fatal: error.message });
    }
})


module.exports = router;