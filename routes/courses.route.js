const express = require('express');
const coursesController = require('../controllers/courses.controller');
const router = express.Router();

/*Rutas de cursos*/

//Mostrar Cursos
router.get('/get-all-courses', coursesController.getAllCourses);

/**
 * @swagger
 * /courses/get-all-courses:
 *   get:
 *      description: Mostrar todos los Cursos
 *      tags:
 *          - Cursos
 *      parameters:
 *          - in: query
 *            name: idUsuario
 *            description: Courses data
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

//Agregar Curso
router.post('/add-courses', coursesController.addCourses);

/**
 * @swagger
 * /courses/add-courses:
 *   post:
 *      description: Registrar Cursos
 *      tags:
 *          - Cursos
 *      parameters:
 *          - in: body
 *            name: Cursos
 *            description: Courses data
 *            schema:
 *              type: object
 *              required:
 *                 - lugar
 *                 - fechaComienzo
 *                 - fechaFinalizacion
 *                 - idUsuario
 *              properties:
 *                  lugar:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 150
 *                      example: Tecla
 *                  fechaComienzo:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 12
 *                      example: 2017/10/25
 *                  fechaFinalizacion:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 12
 *                      example: 2018/03/12
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

//Borrar Curso
router.delete('/delete-courses', coursesController.deleteCourses);

/**
 * @swagger
 * /courses/delete-courses:
 *   delete:
 *      description: Eliminar curso
 *      tags:
 *          - Cursos
 *      parameters:
 *          - in: query
 *            name: idCurso
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

//Actualizar curso

router.put('/update-courses', coursesController.updateCourses);

/**
 * @swagger
 * /courses/update-courses:
 *   put:
 *      description: Actualizar hobbie
 *      tags:
 *          - Cursos
 *      parameters:
 *          - in: body
 *            name: Cursos
 *            description: Cursos data
 *            schema:
 *              type: object
 *              required:
 *                 - lugar
 *                 - fechaComienzo
 *                 - fechaFinalizacion
 *                 - idCurso
 *              properties:
 *                  lugar:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 150
 *                      example: Tecla
 *                  fechaComienzo:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 12
 *                      example: 2017/10/25
 *                  fechaFinalizacion:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 12
 *                      example: 2018/03/12
 *                  idCurso:
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