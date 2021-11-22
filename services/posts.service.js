const pool = require('../config/database');

exports.addPost = (data,callback) => {
    pool.query(
        'INSERT INTO Posts (Descripcion,Contador_Likes,Contador_Dislikes,FechaDePublicacion,id_Usuario) VALUES (?,?,?,?,?)',
        [data.descripcion,data.contadorLikes,data.contadorDislikes,new Date(), data.idUsuario],
        (error,results,fields)=>{
            if(error){
                return callback(error);
            }
            return callback(null, 'Publicacion hecha correctamente');
        }
    )
}
