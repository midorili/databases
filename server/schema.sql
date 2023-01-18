CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  ID int NOT NULL,
  Message varchar(500),
  PRIMARY KEY (ID)
);

CREATE TABLE users (
  /* Describe your table here.*/
  ID int NOT NULL,
  User varchar(255),
  PRIMARY KEY (ID)
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  ID int NOT NULL,
  Room varchar(255),
  PRIMARY KEY (ID)
);

CREATE TABLE messages_users_rooms (
  /* Describe your table here.*/
  ID int NOT NULL,
  Message_ID int,
  User_ID int,
  Room_ID int,
  PRIMARY KEY (ID),
  FOREIGN KEY (Message_ID) REFERENCES messages(ID)
    ON DELETE CASCADE,
  FOREIGN KEY (User_ID) REFERENCES users(ID)
    ON DELETE CASCADE,
  FOREIGN KEY (Room_ID) REFERENCES rooms(ID)
    ON DELETE CASCADE
);
/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

