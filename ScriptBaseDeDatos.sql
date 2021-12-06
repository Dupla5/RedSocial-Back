DROP TABLE Usuarios;
DROP TABLE Estudios;
DROP TABLE Hobbies;
DROP TABLE Idiomas;
DROP TABLE Posts;
DROP TABLE Comentarios;
DROP TABLE Cursos;

#Creacion de Tablas
CREATE TABLE Usuarios (
    id_Usuario int AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    A_Paterno VARCHAR(30) NOT NULL,
    A_Materno VARCHAR(30) NOT NULL,
    Ciudad VARCHAR(30) NOT NULL,
    Pais VARCHAR(30) NOT NULL,
    Edad int NOT NULL,
    Email VARCHAR(35) NOT NULL,
    Pwd VARCHAR(20) NOT NULL,
    Perfil_Linkedin VARCHAR(60),
    Img_Perfil blob,
    create_at TIMESTAMP NOT NULL DEFAULT current_timestamp
);

CREATE TABLE Hobbies (
	id_Hobbies INT AUTO_INCREMENT PRIMARY KEY,
	Nombre_hobbie VARCHAR(25),
	Tiempo_practicado VARCHAR(30),
	id_Usuario INT,
	CONSTRAINT FKUsuarios_hobbies FOREIGN KEY (id_Usuario) REFERENCES Usuarios (id_Usuario) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Idiomas (
	id_Idioma INT AUTO_INCREMENT PRIMARY KEY,
	Nombre_idioma VARCHAR(30) ,
	Nivel VARCHAR(20) ,
	Certificacion VARCHAR(20) ,
	id_Usuario INT,
	CONSTRAINT FKUsuarios_idiomas FOREIGN KEY (id_Usuario) REFERENCES Usuarios (id_Usuario) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Estudios(
	id_Estudios INT AUTO_INCREMENT PRIMARY KEY,
	Escuela VARCHAR(100),
	Grado_Estudios VARCHAR(50),
	Carrera_Cursada VARCHAR(80),
	id_Usuario INT,        
	CONSTRAINT FKUsuario_estudios FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario) ON DELETE CASCADE ON UPDATE CASCADE
); 

CREATE TABLE Cursos(
	id_Curso INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30),
    lugar VARCHAR(150),
    fechaComienzo VARCHAR(12),
    fechaFinalizacion VARCHAR(12),
    id_Usuario INT,
    CONSTRAINT FKUsuario_cursos FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Posts (
  id_Post INT AUTO_INCREMENT PRIMARY KEY,
  Descripcion VARCHAR(1000) NOT NULL,
  #`imagePath` varchar(1000) NOT NULL,
  Contador_Likes INT NOT NULL DEFAULT '0',
  Contador_Dislikes INT NOT NULL DEFAULT '0',
  FechaDePublicacion datetime NOT NULL,
  id_Usuario INT NOT NULL,
  CONSTRAINT FKUsuario_posts FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Comentarios (
  id_Comentario INT AUTO_INCREMENT PRIMARY KEY,
  Post_Id INT NOT NULL,
  Comentario VARCHAR(1000) NOT NULL,
  FechaDePublicacion DATETIME NOT NULL,
  id_Usuario INT NOT NULL,
  CONSTRAINT FKUsuario_comentario FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT FKPostId_comentario FOREIGN KEY (Post_Id) REFERENCES  Posts(id_Post) ON DELETE CASCADE ON UPDATE CASCADE
);

#Modificamos el perfil de linkedin a 100
ALTER TABLE Usuarios MODIFY COLUMN Perfil_Linkedin VARCHAR(100); 

DESCRIBE Usuarios;

SELECT * FROM Usuarios;
SELECT * FROM Comentarios;
SELECT * FROM Posts;
SELECT * FROM Hobbies;
SELECT * FROM Idiomas;
SELECT * FROM Estudios;
SELECT * FROM Cursos;

#ENGINE=InnoDB DEFAULT CHARSET=utf8
#create_at TIMESTAMP NOT NULL DEFAULT current_timestamp,

