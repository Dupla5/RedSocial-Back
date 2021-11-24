const express = require('express');
const lenguagesController = require('../controllers/lenguages.controller');
const router = express.Router();

/*Rutas de lenguajes*/

//Mostrar lenguajes
router.get('/get-all-lenguages', lenguagesController.getAllLenguages);

/**
 * @swagger
 * /lenguages/get-all-lenguages:
 *   get:
 *      description: Mostrar todos los idiomas
 *      tags:
 *          - Idiomas
 *      parameters:
 *          - in: query
 *            name: idUsuario
 *            description: Lenguages data
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

//Agregar lenguajes
router.post('/add-lenguages', lenguagesController.addLenguages);

/**
 * @swagger
 * /lenguages/add-lenguages:
 *   post:
 *      description: Agregar idioma
 *      tags:
 *          - Idiomas
 *      parameters:
 *          - in: body
 *            name: Lenguages
 *            description: Lenguages data
 *            schema:
 *              type: object
 *              required:
 *                 - nombre
 *                 - nivel
 *                 - certificacion
 *                 - idUsuario
 *              properties:
 *                  nombre:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 30
 *                      example: Ingles
 *                  nivel:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 20
 *                      example: Intermedio
 *                  certificacion:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 20
 *                      example: TOEFL
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

//Borrar lenguajes
router.delete('/delete-lenguages', lenguagesController.deleteLenguages);

/**
 * @swagger
 * /lenguages/delete-lenguages:
 *   delete:
 *      description: Eliminar idiomas
 *      tags:
 *          - Idiomas
 *      parameters:
 *          - in: query
 *            name: idIdioma
 *            type: integer
 *            description: Idioma Id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

//Actualizar lenguajes
router.put('/update-lenguages', lenguagesController.updateLenguages);

/**
 * @swagger
 * /lenguages/update-lenguages:
 *   put:
 *      description: Actualizar idioma
 *      tags:
 *          - Idiomas
 *      parameters:
 *          - in: body
 *            name: Idiomas
 *            description: Lenguage data
 *            schema:
 *              type: object
 *              required:
 *                 - nombre
 *                 - nivel
 *                 - certificacion
 *                 - idIdioma
 *              properties:
 *                  nombre:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 30
 *                      example: Ruso
 *                  nivel:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 20
 *                      example: Avanzado
 *                  certificacion:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 20
 *                      example: Ninguna
 *                  idIdioma:
 *                      type: integer
 *                      example: 3
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