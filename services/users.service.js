const pool = require('../config/database');

//Registro de usuario
exports.register = (data,callback)=>{
    pool.query(
        `INSERT INTO Usuarios (Nombre,A_Paterno,A_Materno,Ciudad,Pais,Edad,Email,Pwd) VALUES (?,?,?,?,?,?,?,?);`,
        [data.Nombre,data.A_paterno,data.A_materno,data.Ciudad,data.Pais,data.Edad,data.Email,data.Pwd],
        (error,results,fields)=>{
            if(error) {
                return callback(error);
            }
            return callback(null,"Registro Completado");
        }
    )
}

//Inicio de sesion de usuario
exports.login = (data, callback) => {
    pool.query(
        `SELECT id_Usuario FROM Usuarios WHERE Email= ? AND Pwd = ?;`,
        [data.email, data.pwd],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            if(results.length > 0) {
                return callback(null, results);
            }else{
                return callback(null, "Datos incorrectos");
            }
            
        }
    )
}

exports.getAllUsers = (data,callback) => {
    pool.query(
        `SELECT * FROM Usuarios`,
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


//Obtener datos de usuario
exports.getUser = (data, callback) => {
    pool.query(
        `SELECT * FROM Usuarios WHERE id_Usuario = ?`,
        [data.idUsuario],
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

//Actualizar usuario
exports.updateUser = (data, callback) => {
    pool.query(
        'UPDATE Usuarios SET Nombre = ?, A_Paterno = ?, A_Materno = ?, Ciudad = ?, Pais = ?, Edad= ?, Email= ? , Pwd = ?, Perfil_Linkedin = ? WHERE id_Usuario = ?',
        [data.nombre, data.a_paterno, data.a_materno, data.ciudad, data.pais, data.edad, data.email, data.pwd, data.linkedin, data.idUsuario],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        }
    )
}