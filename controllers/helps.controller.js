const helpsService = require('../services/helps.service');

//Postear un formulario de ayuda
exports.register = (req, res, next) => {
    const data = {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        idUsuario: req.body.id_Usuario,
    }

    helpsService.register(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}

//Obtener todos los formularios
exports.getAllHelps = (req, res, next) => {
    const data = {};
    helpsService.getAllHelps(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: 0, data: "Bad request" })
        }
        return res.status(200).json({ success: 1, data: results, })
    });
}
