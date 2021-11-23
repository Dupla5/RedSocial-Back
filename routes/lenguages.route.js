const express = require('express');
const lenguagesController = require('../controllers/lenguages.controller');
const router = express.Router();

/*Rutas de lenguajes*/

//Mostrar lenguajes
router.get('/get-all-lenguages', lenguagesController.getAllLenguages);

//Agregarlenguajes
router.post('/add-lenguages', lenguagesController.addLenguages);

//Borrarlenguajes
router.delete('/delete-lenguages', lenguagesController.deleteLenguages);

//Actualizarlenguajes
router.put('/update-lenguages', lenguagesController.updateLenguages);

module.exports = router;