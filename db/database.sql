DROP DATABASE IF EXISTS telefoniadb;
CREATE DATABASE telefoniadb;

USE telefoniadb;

CREATE TABLE usuarios(
    id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(20),
    lastLoginDate DATE,
    createdDate DATE,
    PRIMARY KEY (id)
);

CREATE TABLE vendedores(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100),
    email VARCHAR(100),
    num_ventas INT,
    hora_entrada TIME,
    hora_salida TIME,
    PRIMARY KEY (id)
);

CREATE TABLE celulares(
    id INT(11) NOT NULL AUTO_INCREMENT,
    modelo VARCHAR(50),
    marca VARCHAR(50),
    procesador VARCHAR(50),
    ram INT,
    almacenamiento INT,
    PRIMARY KEY (id)
);

CREATE TABLE planes(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50),
    costo INT,
    datos VARCHAR(20),
    redes_gratuitas VARCHAR(100),
    duracion VARCHAR(50),
    PRIMARY KEY (id)
);

CREATE TABLE clientes(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100),
    edad INT,
    telefono INT,
    tipo_compra VARCHAR(50),
    fecha_compra DATE,
    PRIMARY KEY (id)

);
