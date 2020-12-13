-- creating seeds for burger program 
USE burger_db;
-- adding values to table 
INSERT INTO Burgers (burger_name, devoured)
VALUES ("Cheesburger",false), ("Doubledecker",TRUE), ("Arthery_Clogger", false);

SELECT * FROM Burgers;