const express = require('express');
const studiesController = require('../controllers/studies.controller');
const router = express.Router();

/*Rutas de estudios*/

//Mostrar estudios
router.get('/get-all-studies', studiesController.getAllStudies);
/**
 * @swagger
 * /studies/get-all-studies:
 *   get:
 *      description: Mostrar todos los estudios
 *      tags:
 *          - Estudios
 *      parameters:
 *          - in: query
 *            name: idUsuario
 *            description: Estudios data
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


//Agregar estudios
router.post('/add-studies', studiesController.addStudies);

/**
 * @swagger
 * /studies/add-studies:
 *   post:
 *      description: Registrar Estudios
 *      tags:
 *          - Estudios
 *      parameters:
 *          - in: body
 *            name: Estudios
 *            description: Estudios data
 *            schema:
 *              type: object
 *              required:
 *                 - escuela
 *                 - grado
 *                 - carrera
 *                 - idUsuario
 *              properties:
 *                  escuela:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 40
 *                      example: UNITEC
 *                  grado:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 40
 *                      example: 6to
 *                  carrera:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Sistemas Computacionales
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

//Borrar estudios
router.delete('/delete-studies', studiesController.deleteStudies);

/**
 * @swagger
 * /studies/delete-studies:
 *   delete:
 *      description: Eliminar estudio
 *      tags:
 *          - Estudios
 *      parameters:
 *          - in: query
 *            name: idEstudios
 *            type: integer
 *            description: Estudios id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

//Actualizar estudios
router.put('/update-studies', studiesController.updateStudies);

/**
 * @swagger
 * /studies/update-studies:
 *   put:
 *      description: Actualizar hobbie
 *      tags:
 *          - Estudios
 *      parameters:
 *          - in: body
 *            name: Estudios
 *            description: Estudios data
 *            schema:
 *              type: object
 *              required:
 *                 - escuela
 *                 - grado
 *                 - carrera
 *                 - idEstudios
 *              properties:
 *                  escuela:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 40
 *                      example: UNAM
 *                  grado:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 40
 *                      example: 8to
 *                  carrera:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Fisioterapia
 *                  idEstudios:
 *                      type: integer
 *                      example: 1
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