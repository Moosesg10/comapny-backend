CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
)

DESCRIBE employee;


INSERT INTO employee VALUES
(1,'Joe', 1000 ),
(2,'Mark', 2000 ),
(3,'Miguel', 2500 ),
(4,'Jonas', 1500 );


CREATE TABLE admin(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    correo VARCHAR(50)  NOT NULL,
    PRIMARY KEY (id)
)

INSERT INTO admin VALUES(
  3,  "manuel", "manuel@gamil.com","1254" , "true"
);
ALTER TABLE admin ADD COLUMN rol VARCHAR(10) DEFAULT("admin");

UPDATE admin SET name = (name) , correo = ( correo) , password =(password), admin = "true" WHERE id = 1;
UPDATE admin SET name = (name) , correo = ( correo) , password =(password), admin = "false" WHERE id = 4;

ALTER TABLE employee ADD COLUMN rol VARCHAR(10);

UPDATE employee SET name = (name) , salary = ( salary) , rol="empleado" WHERE id = 22;

ALTER TABLE employee MODIFY COLUMN rol VARCHAR(100) DEFAULT("empleado");

UPDATE employee SET name = (name) , salary = ( salary) , rol="owner" WHERE id = 5;

UPDATE admin SET name = (name) , correo = ( correo) , password =(password), admin = (admin) , rol= "owner" WHERE id = 1;


ALTER TABLE admin MODIFY rol DEFAULT(NULL);

ALTER TABLE admin MODIFY rol DEFAULT(NULL);
	
ALTER TABLE admin CHANGE rol rol VARCHAR(10) DEFAULT(NULL);

ALTER TABLE admin CHANGE id id INT(10) NOT NULL;
