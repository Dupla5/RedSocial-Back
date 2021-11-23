const pool = require('../config/database');

//Agregar publicacion
exports.addPost = (data, callback) => {
    pool.query(
        'INSERT INTO Posts (Descripcion,Contador_Likes,Contador_Dislikes,FechaDePublicacion,id_Usuario) VALUES (?,?,?,?,?)',
        [data.descripcion, data.contadorLikes, data.contadorDislikes, new Date(), data.idUsuario],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, 'Comentario hecho correctamente');
        }
    )
}

//Mostrar todas las publicaciones
exports.getAllPosts = (data, callback) => {
    pool.query(
        'SELECT p.id_Post , p.Descripcion, p.FechaDePublicacion, p.Contador_Likes, p.Contador_Dislikes, p.id_Usuario , u.Nombre, u.A_Paterno FROM Posts AS p INNER JOIN Usuarios as u ON p.id_Usuario = u.id_Usuario',
        [],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        }
    )
}

//Comentar una publicacion
exports.addPostComment = (data, callback) => {
    pool.query(
        'INSERT INTO Comentarios (Post_id,Comentario,FechaDePublicacion,id_Usuario) VALUES (?,?,?,?)',
        [data.idPost, data.comment, new Date(), data.idUsuario],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, 'Publicacion hecha correctamente');
        }
    )
}

//Obtener todos los comentarios de una publicacion
exports.getPostsAllComments = (data, callback) => {
    pool.query(
        `SELECT c.Post_Id, c.Comentario , c.FechaDePublicacion, c.id_Usuario , u.Nombre, u.A_Paterno FROM Comentarios AS c INNER JOIN Usuarios AS u ON c.id_Usuario = u.id_Usuario WHERE c.Post_Id = ?`,
        [data.postId],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        }
    )
}

//Likes a una publicacion
exports.likePost = (data, callback) => {
    pool.query(
        `UPDATE Posts SET Contador_Likes = Contador_Likes + 1 WHERE id_Post = ?`,
        [data.postId],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        }
    )
}
//Dislikes a un publicacion
exports.dislikePost = (data, callback) => {
    pool.query(
        `UPDATE Posts SET Contador_Dislikes = Contador_Dislikes + 1 WHERE id_Post = ?`,
        [data.postId],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        }
    )
}


//Borrar una publicacion
exports.deletePost = (data, callback) => {
    pool.query(
        `DELETE FROM Posts WHERE id_Post = ?`,
        [data.postId],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        }
    )
}