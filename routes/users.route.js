const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');


/* Rutas Usuario. */
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
 *      description: Actualizar Usuario
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
 *                      example: Salvador
 *                  a_materno:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 30
 *                      example: Rodriguez
 *                  ciudad:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 30
 *                      example: Medellin
 *                  pais:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 30
 *                      example: Ecuador
 *                  edad:
 *                      type: int
 *                      example: 30
 *                  email:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 30
 *                      example: efgh@mail.com
 *                  pwd:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 20
 *                      example: password
 *                  linkedin:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 40
 *                      example: www.linkedin.com/in/marcos-eduardo-miranda-bravo/
 *                  idUsuario:
 *                      type:integer
 *                      example:2
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;
