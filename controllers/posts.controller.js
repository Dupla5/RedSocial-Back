const postsService = require('../services/posts.service');



//Postear una nueva publicacion
exports.addPost = (req,res,next) =>{
    const data ={
        descripcion: req.body.descripcion,
        contadorLikes: req.body.contadorlikes,
        contadorDislikes : req.body.contadordislikes,
        idUsuario : req.body.idUsuario
    }

    postsService.addPost(data,(error, results)=>{
        if(error){
            console.log(error);
            return res.status(400).json({success:0,data:"Bad request"})
        }
        return res.status(200).json({success:1,data:results,})
    });
}