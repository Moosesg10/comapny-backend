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
(40'Joe', 1000,'empleado' ),
(50,'Mark', 2000,'empleado' ),
(53,'Miguel', 2500,'empleado' ),
(41,'44', 2500,'empleado' ),
(55,'45', 2500,'empleado' ),
(65,'46', 2500,'empleado' ),
(75,'47', 2500 ,'empleado'),
(85,'48', 2500,'empleado' ),
(95,'49', 2500 ,'empleado'),
(10,'50', 2500,'empleado' ),
(11,'100', 2500,'empleado' ),
(12,'200', 2500 ,'empleado'),
(13,'ada', 2500 ,'empleado'),
(14,'ff', 2500 ,'empleado'),
(15,'ada', 2500 ,'empleado'),
(16'sas', 2500,'empleado' ),
(17,'sass', 2500 ,'empleado'),
(18'Miguel', 2500,'empleado' );


CREATE TABLE admin(
    id INT(11) NOT NULL,
    name VARCHAR(45) ,
    password VARCHAR(20),
    admin VARCHAR(10),
    rol VARCHAR(10) ,
    PRIMARY KEY (id)
)

INSERT INTO admin VALUES(
  1,  "mooses","12345" , "true","owner"
);
ALTER TABLE admin ADD COLUMN rol VARCHAR(10) DEFAULT("admin");

UPDATE admin SET name = (name) , correo = ( correo) , password =(password), admin = "true" WHERE id = 1;
UPDATE admin SET name = (name) , correo = ( correo) , password =(password), admin = "false" WHERE id = 4;

ALTER TABLE employee ADD COLUMN rol VARCHAR(10);

UPDATE employee SET name = (name) , salary = ( salary) , rol="empleado" WHERE id = 2;

ALTER TABLE employee MODIFY COLUMN rol VARCHAR(100) DEFAULT("empleado");

UPDATE employee SET name = (name) , salary = ( salary) , rol="owner" WHERE id = 5;

UPDATE admin SET name = (name) , correo = ( correo) , password =(password), admin = (admin) , rol= "owner" WHERE id = 1;


ALTER TABLE admin MODIFY rol DEFAULT(NULL);

ALTER TABLE admin MODIFY rol DEFAULT(NULL);
	
ALTER TABLE admin CHANGE rol rol VARCHAR(10) DEFAULT(NULL);

ALTER TABLE admin CHANGE id id INT(10) NOT NULL;
