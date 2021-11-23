const pool = require('../config/database');

//Agregar un hobbie
exports.addLenguages = (data, callback) => {
    pool.query(
        'INSERT INTO Idiomas (Nombre_idioma,Nivel,Certificacion,id_Usuario) VALUES (?,?,?,?)',
        [data.nombre, data.nivel,data.certificacion,data.idUsuario],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, 'Lenguage agregado correctamente');
        }
    )
}

//Mostrar todas los lenguajes
exports.getAllLenguages = (data, callback) => {
    pool.query(
        'SELECT i.id_Idioma, i.Nombre_idioma , i.Nivel, i.Certificacion FROM Idiomas AS i WHERE id_Idioma = ?',
        [data.idIdioma],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        }
    )
}

//Eliminar un hobbie
exports.deleteLenguages = (data, callback) => {
    pool.query(
        'DELETE FROM Idiomas WHERE id_Idioma = ?',
        [data.idIdioma],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, 'Se ha eliminado correctamente');
        }
    )
}

//Actualizar hobbies
exports.updateLenguages = (data, callback) => {
    pool.query(
        `UPDATE Idiomas SET Nombre_idioma = ? , Nivel = ? , Certificacion = ?  WHERE id_Idioma = ?`,
        [data.nombre, data.nivel,data.certificacion, data.idIdioma],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        }
    )
}