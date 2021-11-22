const express = require('express');
const postsController = require('../controllers/posts.controller')
const router = express.Router();

/*Rutas del posts*/
router.post('/add-post', postsController.addPost);

module.exports = router;
