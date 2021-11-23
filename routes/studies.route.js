const express = require('express');
const studiesController = require('../controllers/studies.controller');
const router = express.Router();

/*Rutas de estudios*/

//Mostrar estudios
router.get('/get-all-studies', studiesController.getAllStudies);

//Agregar estudios
router.post('/add-studies', studiesController.addStudies);

//Borrar estudios
router.delete('/delete-studies', studiesController.deleteStudies);

//Actualizar estudios
router.put('/update-studies', studiesController.updateStudies);

module.exports = router;