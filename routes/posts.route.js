const express = require('express');
const postsController = require('../controllers/posts.controller')
const router = express.Router();

/*Rutas del posts*/
//Agregar un post
router.post('/add-post', postsController.addPost);

/**
 * @swagger
 * /posts/add-post:
 *   post:
 *      description: Crear Posts
 *      tags:
 *          - Posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: Post data
 *            schema:
 *              type: object
 *              required:
 *                 - descripcion
 *                 - contadorlikes
 *                 - contadordislikes
 *                 - idUsuario
 *              properties:
 *                  descripcion:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: Una gran trabajo en equipo
 *                  contadorlikes:
 *                      type: int
 *                      example: 3
 *                  contadordislikes:
 *                      type: int
 *                      example: 5
 *                  idUsuario:
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


//Leer todos los posts
router.get('/get-all-posts', postsController.getAllPosts);

/**
 * @swagger
 * /posts/get-all-posts:
 *   get:
 *      description: Mostrar todos los posts
 *      tags:
 *          - Posts
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


//Publicar un comentario
router.post('/add-post-comment', postsController.addPostComment);

/**
 * @swagger
 * /posts/add-post-comment:
 *   post:
 *      description: Crear Comentario
 *      tags:
 *          - Posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: Comment data
 *            schema:
 *              type: object
 *              required:
 *                 - idPost
 *                 - comment
 *                 - idUsuario
 *              properties:
 *                  idPost:
 *                      type: int
 *                      example: 1
 *                  comment:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: Gran ejemplo de posts
 *                  idUsuario:
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


//Leer todos los comentarios de una publicacion
router.get('/get-post-all-comments', postsController.getPostAllComments);

/**
 * @swagger
 * /posts/get-post-all-comments:
 *   get:
 *      description: Mostrar todos los comentarios
 *      tags:
 *          - Posts
 *      parameters:
 *          - in: query
 *            name: postId
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

//Likes
router.put('/like-post', postsController.likePost);

/**
 * @swagger
 * /posts/like-post:
 *   put:
 *      description: Dar like a los post
 *      tags:
 *          - Posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: Post data
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *              properties:
 *                  postId:
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

//Dislikes
router.put('/dislike-post', postsController.dislikePost);

/**
 * @swagger
 * /posts/dislike-post:
 *   put:
 *      description: Dar dislike a los post
 *      tags:
 *          - Posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: Post data
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *              properties:
 *                  postId:
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

//Borrar una publicacion
router.delete('/delete-post', postsController.deletePost);

/**
 * @swagger
 * /posts/delete-post:
 *   delete:
 *      description: Used to delete post
 *      tags:
 *          - Posts
 *      parameters:
 *          - in: query
 *            name: postId
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

module.exports = router;
