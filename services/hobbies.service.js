const pool = require('../config/database');

//Agregar un hobbie
exports.addHobbies = (data, callback) => {
    pool.query(
        'INSERT INTO Hobbies (Nombre_hobbie,Tiempo_practicado,id_Usuario) VALUES (?,?,?)',
        [data.nombre, data.tiempo, data.idUsuario],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, 'Hobbie agregado correctamente');
        }
    )
}

//Mostrar todas los hobbies
exports.getAllHobbies = (data, callback) => {
    pool.query(
        'SELECT id_Hobbies, Nombre_hobbie , Tiempo_practicado FROM Hobbies WHERE id_Usuario = ?',
        [data.idUsuario],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        }
    )
}

//Eliminar un hobbie
exports.deleteHobbies = (data, callback) => {
    pool.query(
        'DELETE FROM Hobbies WHERE id_Hobbies = ?',
        [data.idHobbie],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, 'Se ha eliminado correctamente');
        }
    )
}

//Actualizar hobbies
exports.updateHobbies = (data, callback) => {
    pool.query(
        `UPDATE Hobbies SET Nombre_hobbie = ? , Tiempo_practicado = ?  WHERE id_Hobbies = ?`,
        [data.nombre,data.tiempo,data.idHobbie],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        }
    )
}
