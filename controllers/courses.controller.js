const coursesService = require('../services/courses.service');

//Postear un Curso
exports.addCourses = (req, res, next) => {
    const data = {
        lugar: req.body.lugar,
        fechaComienzo: req.body.fechaComienzo,
        fechaFinalizacion: req.body.fechaFinalizacion,
        idUsuario: req.body.idUsuario
    }

    coursesService.addCourses(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}

//Obtener todos los courses
exports.getAllCourses = (req, res, next) => {
    const data = {
        idUsuario: req.query.idUsuario
    };
    coursesService.getAllCourses(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}


//Eliminar un hobbie
exports.deleteCourses = (req, res, next) => {
    const data = {
        idCurso: req.query.idCurso
    }

    coursesService.deleteCourses(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}

//Actualizar un hobbie

exports.updateCourses = (req, res, next) => {
    const data = {
        idCurso: req.body.idCurso,
        lugar: req.body.lugar,
        fechaComienzo: req.body.fechaComienzo,
        fechaFinalizacion: req.body.fechaFinalizacion,
    };
    coursesService.updateCourses(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}
