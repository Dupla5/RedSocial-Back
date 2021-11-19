DROP TABLE hobbies;

CREATE TABLE hobbies (

id_hobbies int AUTO_INCREMENT PRIMARY KEY,
nombre_hobbie varchar (15),
tiempo_practicado varchar (15),
id_Usuario int,
CONSTRAINT FKUsuarios_hobbies FOREIGN KEY (id_Usuario) REFERENCES Usuarios (id_Usuario)
);




CREATE TABLE Idiomas (
  id_idioma int AUTO_INCREMENT PRIMARY KEY,
  nombre_idioma varchar(30) ,
  nivel varchar(20) ,
  certificacion varchar(20) ,
  id_Usuario int,
 CONSTRAINT FKUsuarios_idiomas FOREIGN KEY (id_Usuario) REFERENCES Usuarios (id_Usuario)
); 