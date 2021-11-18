DROP TABLE Estudios;

CREATE TABLE Usuarios
(
    id_Usuario int AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    A_Paterno VARCHAR(30) NOT NULL,
    A_Materno VARCHAR(30) NOT NULL,
    Ciudad VARCHAR(30) NOT NULL,
    Pais VARCHAR(30) NOT NULL,
    Edad int NOT NULL,
    Email VARCHAR(30) NOT NULL,
    Perfil_Linkedin VARCHAR(40) NOT NULL,
    Img_Perfil blob NOT NULL
);

DESCRIBE Usuarios;

SELECT * FROM Usuarios;

CREATE TABLE Estudios
    (
        id_Estudios int AUTO_INCREMENT PRIMARY KEY,
        Escuela VARCHAR(40),
        Grado_Estudios VARCHAR(40),
        Carrera_Cursada VARCHAR(50),
        id_Usuario INT,
        create_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
        CONSTRAINT FK_Usuario FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario)
);
