const pool = require('../config/database');

//Registrar 
exports.register = (data, callback) => {
    pool.query(
        `INSERT INTO Ayuda (titulo,descripcion,id_Usuario) VALUES (?,?,?);`,
        [data.titulo, data.descripcion, data.idUsuario],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, "Formulario Completado");
        }
    )
}

exports.getAllHelps = (data, callback) => {
    pool.query(
        `SELECT * FROM Ayuda`,
        [],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            if (results.length > 0) {
                return callback(null, results);
            } else {
                return callback(null, "Datos incorrectos");
            }

        }
    )
}