const express = require('express');
const hobbiesController = require('../controllers/hobbies.controller');
const router = express.Router();

/*Rutas de hobbies*/

//Mostrar hobbies
router.get('/get-all-hobbies',hobbiesController.getAllHobbies);

/**
 * @swagger
 * /hobbies/get-all-hobbies:
 *   get:
 *      description: Mostrar todos los hobbies
 *      tags:
 *          - Hobbies
 *      parameters:
 *          - in: query
 *            name: idUsuario
 *            description: Hobbies data
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

//Agregar hobbie
router.post('/add-hobbies', hobbiesController.addHobbies);

/**
 * @swagger
 * /hobbies/add-hobbies:
 *   post:
 *      description: Registrar Hobbies
 *      tags:
 *          - Hobbies
 *      parameters:
 *          - in: body
 *            name: Hobbies
 *            description: Hobbies data
 *            schema:
 *              type: object
 *              required:
 *                 - nombre
 *                 - tiempo
 *                 - idUsuario
 *              properties:
 *                  nombre:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 15
 *                      example: Patinar
 *                  tiempo:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 15
 *                      example: 10 años
 *                  idUsuario:
 *                      type: integer
 *                      example: 1           
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

//Borrar hobbie
router.delete('/delete-hobbies', hobbiesController.deleteHobbies);

/**
 * @swagger
 * /hobbies/delete-hobbies:
 *   delete:
 *      description: Eliminar hobbie
 *      tags:
 *          - Hobbies
 *      parameters:
 *          - in: query
 *            name: idHobbie
 *            type: integer
 *            description: Post id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

//Actualizar hobbie
router.put('/update-hobbies', hobbiesController.updateHobbies);

/**
 * @swagger
 * /hobbies/update-hobbies:
 *   put:
 *      description: Actualizar hobbie
 *      tags:
 *          - Hobbies
 *      parameters:
 *          - in: body
 *            name: Hobbies
 *            description: Hobbie data
 *            schema:
 *              type: object
 *              required:
 *                 - idHobbie
 *                 - nombre
 *                 - tiempo
 *              properties:
 *                  idHobbie:
 *                      type: integer
 *                      example: 2
 *                  nombre:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 15
 *                      example: Escalar
 *                  tiempo:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 15
 *                      example: 20 años
 *                  
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


module.exports = router;