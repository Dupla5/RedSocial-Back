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
                return callback(null, "Inicio de sesion exitoso");
            }else{
                return callback(null, "Datos incorrectos");
            }
            
        }
    )
}