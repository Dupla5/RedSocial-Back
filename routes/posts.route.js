const express = require('express');
const postsController = require('../controllers/posts.controller')
const router = express.Router();

/*Rutas del posts*/
//Agregar un post
router.post('/add-post', postsController.addPost);

//Leer todos los posts
router.get('/get-all-posts', postsController.getAllPosts);

//Publicar un comentario
router.post('/add-post-comment', postsController.addPostComment);


//Leer todos los comentarios de una publicacion
router.get('/get-post-all-comments', postsController.getPostAllComments);

//Likes
router.put('/like-post', postsController.likePost);

//Dislikes
router.put('/dislikes-post', postsController.dislikePost);

//Borrar una publicacion
router.delete('/delete-post', postsController.deletePost);



module.exports = router;
