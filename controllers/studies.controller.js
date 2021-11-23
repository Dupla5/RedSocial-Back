const studiesService = require('../services/studies.service');

//Agregar un estudio
exports.addStudies = (req, res, next) => {
    const data = {
        escuela: req.body.escuela,
        grado: req.body.grado,
        carrera: req.body.carrera,
        idUsuario: req.body.idUsuario
    }

    studiesService.addStudies(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}

//Obtener todos los estudios
exports.getAllStudies = (req, res, next) => {
    const data = {
        idUsuario: req.query.idUsuario
    };
    studiesService.getAllStudies(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}


//Borrar un estudio
exports.deleteStudies = (req, res, next) => {
    const data = {
        idEstudios: req.query.idEstudios,
    }

    studiesService.deleteStudies(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}

//Actualizar un estudio
exports.updateStudies = (req, res, next) => {
    const data = {
        escuela: req.body.escuela,
        grado: req.body.grado,
        carrera: req.body.carrera,
        idEstudios: req.body.idEstudios,

    };
    studiesService.updateStudies(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}