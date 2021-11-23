const lenguagesService = require('../services/lenguages.service');

//Agregar un lenguaje
exports.addLenguages = (req, res, next) => {
    const data = {
        nombre: req.body.nombre,
        nivel: req.body.nivel,
        certificacion: req.body.certificacion,
        idUsuario: req.body.idUsuario
    }

    lenguagesService.addLenguages(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}

//Obtener todos los lenguajes
exports.getAllLenguages = (req, res, next) => {
    const data = {
        idUsuario: req.query.idUsuario
    };
    lenguagesService.getAllLenguages(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}


//Borrar un lenguaje
exports.deleteLenguages = (req, res, next) => {
    const data = {
        idIdioma: req.query.idIdioma,
    }

    lenguagesService.deleteLenguages(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}

//Actualizar un lenguaje
exports.updateLenguages = (req, res, next) => {
    const data = {
        nombre: req.body.nombre,
        nivel: req.body.nivel,
        certificacion : req.body.certificacion,
        idIdioma:req.body.idIdioma,

    };
    lenguagesService.updateLenguages(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}