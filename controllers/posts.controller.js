const postsService = require('../services/posts.service');

//Postear una nueva publicacion
exports.addPost = (req, res, next) => {
    const data = {
        descripcion: req.body.descripcion,
        idUsuario: req.body.idUsuario
    }

    postsService.addPost(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}

//Obtener todas las publicaciones
exports.getAllPosts = (req, res, next) => {
    const data = {};
    postsService.getAllPosts(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}


//Publicar un comentario
exports.addPostComment = (req, res, next) => {
    const data = {
        idPost: req.body.idPost,
        comment: req.body.comment,
        idUsuario: req.body.idUsuario,
    }

    postsService.addPostComment(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}

//Obtener todas los comentarios
exports.getPostAllComments = (req, res, next) => {
    const data = {
        postId: req.query.postId,
    };
    postsService.getPostsAllComments(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}

//Likes a las publicaciones
exports.likePost = (req, res, next) => {
    const data = {
        postId: req.body.postId,
    };
    postsService.likePost(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    })
};

//Dislikes a las publicaciones
exports.dislikePost = (req, res, next) => {
    const data = {
        postId: req.body.postId,
    };
    postsService.dislikePost(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    })
};

//Borrar una publicacion publicaciones
exports.deletePost = (req, res, next) => {
    const data = {
        postId: req.query.postId,
    };
    postsService.deletePost(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    })
};