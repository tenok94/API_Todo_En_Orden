const express = require('express');
const router = express.Router();
const ModelTarea = require("../models/tareamodel.js");


router.get("/tareas", async (req, res) => {
    try {
        const tareas = await ModelTarea.find();
        res.status(200).send(tareas)
    } catch (error) {
        res.status(500).send({ mensaje : "no se encontraron tareas", error });
    }
})

module.exports = router;