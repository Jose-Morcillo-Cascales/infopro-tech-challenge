DROP DATABASE IF EXISTS car_company;
CREATE DATABASE IF NOT EXISTS car_company;
USE car_company;   

CREATE TABLE employees(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
employee_code VARCHAR(50) NOT NULL,
name VARCHAR(50) NOT NULL,
password VARCHAR(50) NOT NULL,
date_of_discharge date NOT NULL,
active_working Bool NOT NULL
);

INSERT INTO employees (employee_code, name, password, date_of_discharge, active_working)
VALUES 
("XMV12", "Rack", "1234", "1996/10/07", 0),
("XZV92", "John", "1234", "1996/11/18", 1),
("LPO26", "Leila", "1234", "1996/12/19", 0),
("LWV98", "Richard", "1234", "1995/11/20",1),
("MLO16", "Susan", "1234", "1998/11/21", 1),
("XMR35", "Brad", "1234", "2000/11/22", 0),
("NBG23", "Neil", "1234", "2001/10/24", 1),
("LWV97", "Sandra", "1234", "1996/09/30", 1),
("LWV12", "Homer", "1234", "1985/01/15", 0),
("LWS97", "Jack", "1234", "1987/11/28", 1);

