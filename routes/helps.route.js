const express = require('express');
const router = express.Router();
const helpsController = require('../controllers/helps.controller');

/*Ruta formulario*/

//Registro de algun formulario
router.post('/register', helpsController.register);

/**
 * @swagger
 * /helps/register:
 *   post:
 *      description: Registrar Formulario de ayuda
 *      tags:
 *          - Ayuda
 *      parameters:
 *          - in: body
 *            name: Help
 *            description: Help data
 *            schema:
 *              type: object
 *              required:
 *                 - titulo
 *                 - descripcion
 *                 - id_Usuario
 *              properties:
 *                  titulo:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: Bugea en el login
 *                  descripcion:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: No me reconoce de inmediato el inicio de sesion
 *                  id_Usuario:
 *                      type: int
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

//Obtener todos los formularios de ayuda por parte de los usuarios
router.get('/get-all-helps', helpsController.getAllHelps);
/**
 * @swagger
 * /helps/get-all-helps:
 *   get:
 *      description: Mostrar todos los formularios de ayuda
 *      tags:
 *          - Ayuda
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;