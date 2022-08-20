# back-end-node
Proyecto back-end-node


Data Base in MySQL WorkBench:

DROP DATABASE IF EXISTS Proyect_Data_Base;

CREATE DATABASE Proyect_Data_Base;
USE Proyect_Data_Base;

-- drop table  resume_entry; --


CREATE TABLE resume_entry (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
company VARCHAR(50) NOT NULL,
title VARCHAR(50),
start_date DATE,
finish_date DATE,
role_description LONGTEXT
);

INSERT INTO RESUME_ENTRY
VALUES 
	(
1,
"Xperigo", 
"Solution Specialist", 
"2021-11-26", 
"2022-06-24",
-- "Use of SalesForce (SaaS) on a daily basis to manage Road Side Assistance for customers. Geographical location of customers using GPS coordinates as well as finding physical addresses. Filed complaints on behalf of customers after researching parameters. Learned and maintained program parameters for different brand of vehicles such as: Audi  Honda  Hyundai  Mitsubishi. Upheld customer confidentiality according to company policies. Maintained the proper routes of communication with my team and the rest of the organization. Communicated with outsourced third parties to arrange for services outside of parameters."
"test description remember that we want multiline, maybe from another table (description joined by entry id)"
	),
	(
2,
"Company2",
"Postion2", 
"2020-11-22", 
"2019-04-12", 
"test description 2"
    ),
	(
3,
"Company3",
"Postion3", 
"2020-11-22", 
"2019-04-12", 
"test description 3"
    ),
    (
4,
"Company4",
"Postion4", 
"2020-11-22", 
"2019-04-12", 
"test description 4"
    ),
    (
5,
"Company5",
"Postion5", 
"2020-11-22", 
"2019-04-12", 
"test description 5"
    );

    /* ////////////// If needed run the lines below to delet and reset the user /////////////////


DROP USER 'TestUser'@'localhost'; 

USE mysql;
CREATE USER 'TestUser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'S7R0NGp4ssw0rd!';
GRANT ALL PRIVILEGES ON *.* TO 'TestUser'@'localhost';
flush privileges;*/