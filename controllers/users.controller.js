const usersService = require('../services/users.service');

//Registro de nuevo usuario
exports.register = (req,res,next)=>{
    const data = {
        Nombre : req.body.nombre,
        A_paterno : req.body.a_paterno,
        A_materno : req.body.a_materno,
        Ciudad : req.body.ciudad,
        Pais : req.body.pais,
        Edad: req.body.edad,
        Email : req.body.email,
        Pwd : req.body.pwd
    };

    usersService.register(data,(error,results)=>{
        if(error){
            console.log(error);
            return res.status(400).json({
                success:0,
                data:"Bad request"
            })
        }
        return res.status(201).json({
            success:1,
            data:results
        })
    })
}


//Inicio de sesion de usuario
exports.login = (req, res, next) => {
    const data = {
        email: req.body.email,
        pwd: req.body.pwd
    };

    usersService.login(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({
                success: 0,
                data: "Bad request"
            })
        }     
        return res.status(201).json({
            success: 1,
            data: results
        })
    })
}

//Obtener todos los usuario
exports.getAllUsers = (req, res) => {
    const data = {};
    usersService.getAllUsers(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({
                success: 0,
                data: "Bad request"
            })
        }
        return res.status(201).json({
            success: 1,
            data: results
        })
    })
}

//Obtener usuario
exports.getUser = (req, res, next) => {
    //Area de validación
    const data = {
        idUsuario: req.query.idUsuario,
    };

    usersService.getUser(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({
                success: 0,
                data: "Bad request"
            })
        }
        return res.status(201).json({
            success: 1,
            data: results
        })
    })
}


//Actualizar Usuario
exports.updateUser = (req, res, next) => {
    const data = {
        nombre: req.body.nombre,
        a_paterno: req.body.a_paterno,
        a_materno: req.body.a_materno,
        ciudad: req.body.ciudad,
        pais: req.body.pais,
        edad: req.body.edad,
        email: req.body.email,
        pwd: req.body.pwd,
        linkedin: req.body.linkedin,
        idUsuario : req.body.idUsuario,
    };

    usersService.updateUser(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({
                success: 0,
                data: "Bad request"
            })
        }
        return res.status(201).json({
            success: 1,
            data: results
        })
    })
}