const pool = require('../config/database');

//Agregar un estudio
exports.addStudies = (data, callback) => {
    pool.query(
        'INSERT INTO Estudios (Escuela,Grado_Estudios,Carrera_Cursada,id_Usuario) VALUES (?,?,?,?)',
        [data.escuela, data.grado, data.carrera, data.idUsuario],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, 'Estudio agregado correctamente');
        }
    )
}

//Mostrar todos los estudios
exports.getAllStudies = (data, callback) => {
    pool.query(
        'SELECT Escuela , Grado_Estudios, Carrera_Cursada FROM Estudios WHERE id_Usuario = ?',
        [data.idUsuario],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        }
    )
}

//Eliminar un estudio
exports.deleteStudies = (data, callback) => {
    pool.query(
        'DELETE FROM Estudios WHERE id_Estudios = ?',
        [data.idEstudios],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, 'Se ha eliminado correctamente');
        }
    )
}

//Actualizar estudio
exports.updateStudies = (data, callback) => {
    pool.query(
        `UPDATE Estudios SET Escuela = ? , Grado_Estudios = ? , Carrera_Cursada = ?  WHERE id_Estudios = ?`,
        [data.escuela, data.grado, data.carrera, data.idEstudios],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        }
    )
}