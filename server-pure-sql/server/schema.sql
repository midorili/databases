DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

--  product_id int(11) NOT NULL AUTO_INCREMENT,--
--  add auto increment.

CREATE TABLE users (
  `ID` int NOT NULL AUTO_INCREMENT,
  `username`varchar (255),
  PRIMARY KEY (ID)
);

CREATE TABLE messages (
  `ID` int NOT NULL AUTO_INCREMENT,
  `username` varchar(500),
  `message` varchar(500),
  `roomname` varchar(255),
  PRIMARY KEY (`ID`)

);
/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

