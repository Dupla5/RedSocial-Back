const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');


/* Rutas Usuario. */
router.get('/getUser',usersController.getUser);

/**
 * @swagger
 * /users/getUser:
 *   get:
 *      description: Obtener Usuario
 *      tags:
 *          - Usuarios
 *      parameters:
 *          - in: query
 *            name: idUsuario
 *            description: User data
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

//Registro de Usuario
router.post('/register',usersController.register);

/**
 * @swagger
 * /users/register:
 *   post:
 *      description: Registrar Usuarios
 *      tags:
 *          - Usuarios
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - nombre
 *                 - a_paterno
 *                 - a_materno
 *                 - ciudad
 *                 - pais
 *                 - edad
 *                 - email
 *                 - pwd
 *              properties:
 *                  nombre:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Jorgue
 *                  a_paterno:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 30
 *                      example: Guiterrez
 *                  a_materno:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 30
 *                      example: Najera
 *                  ciudad:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 30
 *                      example: Reynosa
 *                  pais:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 30
 *                      example: México
 *                  edad:
 *                      type: int                     
 *                      example: 25
 *                  email:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 30
 *                      example: abcd@mail.com
 *                  pwd:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 20
 *                      example: password1234
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


//Inicio de Sesion
router.post('/login',usersController.login);

/**
 * @swagger
 * /users/login:
 *   post:
 *      description: Iniciar sesion del Usuario
 *      tags:
 *          - Usuarios
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - email
 *                 - pwd
 *              properties:                
 *                  email:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 30
 *                      example: abcd@mail.com
 *                  pwd:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 20
 *                      example: password1234
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

//Actualizar datos del usuario
router.put('/update-user', usersController.updateUser);

/**
 * @swagger
 * /users/update-user:
 *   put:
 *      description: Actualizar usuario
 *      tags:
 *          - Usuarios
 *      parameters:
 *          - in: body
 *            name: Usuario
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - nombre
 *                 - a_paterno
 *                 - a_materno
 *                 - ciudad
 *                 - pais
 *                 - edad
 *                 - email
 *                 - pwd
 *                 - linkedin
 *                 - idUsuario
 *              properties:
 *                  nombre:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Simon
 *                  a_paterno:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 30
 *                      example: Cordoba
 *                  a_materno:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 30
 *                      example: Sanchez
 *                  ciudad:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 30
 *                      example: Sevilla
 *                  pais:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 30
 *                      example: España
 *                  edad:
 *                      type: int
 *                      example: 95
 *                  email:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 30
 *                      example: efgh@mail.com
 *                  pwd:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 20
 *                      example: password25
 *                  linkedin:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 30
 *                      example: https://www.linkedin.com/in/rafa-soriano/
 *                  idUsuario:
 *                      type: int
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
