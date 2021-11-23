const express = require('express');
const hobbiesController = require('../controllers/hobbies.controller');
const router = express.Router();

/*Rutas de hobbies*/

//Mostrar hobbies
router.get('/get-all-hobbies',hobbiesController.getAllHobbies);

//Agregar hobbie
router.post('/add-hobbies', hobbiesController.addHobbies);

//Borrar hobbie
router.delete('/delete-hobbies', hobbiesController.deleteHobbies);

//Actualizar hobbie
router.put('/update-hobbies', hobbiesController.updateHobbies);

module.exports = router;