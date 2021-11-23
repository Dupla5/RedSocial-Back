const express = require('express');
const lenguagesController = require('../controllers/lenguages.controller');
const router = express.Router();

/*Rutas de hobbies*/

//Mostrar hobbies
router.get('/get-all-lenguages', lenguagesController.getAllLenguages);

//Agregar hobbie
router.post('/add-lenguages', lenguagesController.addLenguages);

//Borrar hobbie
router.delete('/delete-lenguages', lenguagesController.deleteLenguages);

//Actualizar hobbie
router.put('/update-lenguages', lenguagesController.updateLenguages);

module.exports = router;