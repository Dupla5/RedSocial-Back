const pool = require('../config/database');

//Agregar un curso
exports.addCourses = (data, callback) => {
    console.log(data.nombre);
    pool.query(
        'INSERT INTO Cursos (nombre,lugar,fechaComienzo,fechaFinalizacion,id_Usuario) VALUES (?,?,?,?,?)',
        [data.nombre, data.lugar, data.fechaComienzo, data.fechaFinalizacion, data.idUsuario],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, 'Curso agregado correctamente');
        }
    )
}

//Mostrar todos los cursos
exports.getAllCourses = (data, callback) => {
    pool.query(
        'SELECT id_Curso, nombre, lugar , fechaComienzo , fechaFinalizacion FROM Cursos WHERE id_Usuario = ?',
        [data.idUsuario],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        }
    )
}

//Eliminar un curso
exports.deleteStudies = (data, callback) => {
    pool.query(
        'DELETE FROM Cursos WHERE id_Curso = ?',
        [data.idCurso],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, 'Se ha eliminado correctamente');
        }
    )
}


//Actualizar curso
exports.updateCourses = (data, callback) => {
    pool.query(
        `UPDATE Cursos SET nombre = ? , lugar = ? , fechaComienzo = ? , fechaFinalizacion = ?  WHERE id_Curso = ?`,
        [data.nombre, data.lugar, data.fechaComienzo, data.fechaFinalizacion, data.idCurso],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        }
    )
}
