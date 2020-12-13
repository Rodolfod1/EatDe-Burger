-- Eatde_burger_database 
DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;
-- creating the table for my app 
CREATE TABLE Burgers(
Id INT AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(40) NOT NULL,
devoured BOOLEAN);

SELECT * FROM Burgers;
