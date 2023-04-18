const { getAllAsignaturas } = require("../../models/asignatura.model");
const router = require('express').Router();



router.get('/', async (req, res) => {
    try {
        const [clases] = await getAllAsignaturas();
        res.json(clases);
    } catch (error) {
        res.json({ fatal: error.message });
    }
})

module.exports = router;