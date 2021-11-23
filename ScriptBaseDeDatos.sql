DROP TABLE Usuarios;
DROP TABLE Estudios;
DROP TABLE hobbies;
DROP TABLE Idiomas;
DROP TABLE Posts;
DROP TABLE Comentarios;

#Creacion de Tablas
CREATE TABLE Usuarios (
    id_Usuario int AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    A_Paterno VARCHAR(30) NOT NULL,
    A_Materno VARCHAR(30) NOT NULL,
    Ciudad VARCHAR(30) NOT NULL,
    Pais VARCHAR(30) NOT NULL,
    Edad int NOT NULL,
    Email VARCHAR(30) NOT NULL,
    Pwd VARCHAR(20) NOT NULL,
    Perfil_Linkedin VARCHAR(40),
    Img_Perfil blob,
    create_at TIMESTAMP NOT NULL DEFAULT current_timestamp
);

INSERT INTO Usuarios (Nombre,A_Paterno,A_Materno,Ciudad,Pais,Edad,Email,Pwd) VALUES
("Marcos","Miranda","Bravo","Ecatepec","Mexico",25,"markuzemb18@gmail.com","12345");

SELECT * FROM Usuarios;

CREATE TABLE Hobbies (
	id_Hobbies INT AUTO_INCREMENT PRIMARY KEY,
	Nombre_hobbie VARCHAR(15),
	Tiempo_practicado VARCHAR(15),
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
	Escuela VARCHAR(40),
	Grado_Estudios VARCHAR(40),
	Carrera_Cursada VARCHAR(50),
	id_Usuario INT,        
	CONSTRAINT FKUsuario_estudios FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario) ON DELETE CASCADE ON UPDATE CASCADE
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

SELECT * FROM Comentarios;

CREATE TABLE Comentarios (
  id_Comentario INT AUTO_INCREMENT PRIMARY KEY,
  Post_Id INT NOT NULL,
  Comentario VARCHAR(1000) NOT NULL,
  FechaDePublicacion DATETIME NOT NULL,
  id_Usuario INT NOT NULL,
  CONSTRAINT FKUsuario_comentario FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT FKPostId_comentario FOREIGN KEY (Post_Id) REFERENCES  Posts(id_Post) ON DELETE CASCADE ON UPDATE CASCADE
);



ALTER TABLE Usuarios ADD pwd varchar(10) not null;
ALTER TABLE Usuarios CHANGE COLUMN Img_Perfil Img_Perfil blob;
ALTER TABLE Usuarios CHANGE COLUMN Perfil_Linkedin Perfil_Linkedin VARCHAR(40);

DESCRIBE Usuarios;
SELECT c.Post_Id, c.Comentario , c.FechaDePublicacion, c.id_Usuario , u.Nombre, u.A_Paterno FROM Comentarios AS c INNER JOIN Usuarios AS u ON c.id_Usuario = u.id_Usuario WHERE c.Post_Id = 1;
SELECT * FROM Comentarios WHERE Post_Id = 1;
SELECT * FROM Posts;
SELECT * FROM Hobbies;
SELECT * FROM Idiomas;
SELECT * FROM Estudios;
DESCRIBE Posts;

#ENGINE=InnoDB DEFAULT CHARSET=utf8
#create_at TIMESTAMP NOT NULL DEFAULT current_timestamp,

