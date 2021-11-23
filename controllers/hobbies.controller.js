const hobbiesService = require('../services/hobbies.service');

//Postear un hobbie
exports.addHobbies = (req, res, next) => {
    const data = {
        nombre: req.body.nombre,
        tiempo: req.body.tiempo,
        idUsuario: req.body.idUsuario
    }

    hobbiesService.addHobbies(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}

//Obtener todos los hobbies
exports.getAllHobbies = (req, res, next) => {
    const data = {
        idUsuario: req.query.idUsuario
    };
    hobbiesService.getAllHobbies(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}


//Eliminar un hobbie
exports.deleteHobbies = (req, res, next) => {
    const data = {
        idHobbie : req.query.idHobbie
    }

    hobbiesService.deleteHobbies(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}

//Actualizar un hobbie
exports.updateHobbies = (req, res, next) => {
    const data = {
        idHobbie: req.body.idHobbie,
        nombre:req.body.nombre,
        tiempo:req.body.tiempo,
    };
    hobbiesService.updateHobbies(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}
