/* Creating database */
CREATE DATABASE scms;
USE scms;
/* Create table company */
CREATE TABLE company (
company_id INT NOT NULL AUTO_INCREMENT,
company_name VARCHAR(100),
year_established INT NOT NULL,
type VARCHAR(100),
PRIMARY KEY(company_id));

/* Inserting values into table company */

INSERT INTO company ( company_name, year_established,type)
VALUES ( 'facebook', '2004', 'technology');
SELECT * FROM company;
INSERT INTO company ( company_name, year_established,type)
VALUES ( 'google', '1998', 'technology');
INSERT INTO company ( company_name, year_established,type)
VALUES ( 'apple', '1976', 'technology');

/*Create table address */

CREATE TABLE address (
company_id INT NOT NULL,
address_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
street_name VARCHAR(100),
city VARCHAR(100),
Country VARCHAR(100),
FOREIGN KEY (company_id) REFERENCES company(company_id));

/* Inserting values into table address */

INSERT INTO address(company_id , street_name,city,Country ) 
VALUES (
    ( SELECT company_id FROM company WHERE company_name = "facebook" ), 'cambridge','Massachusetts','USA');
INSERT INTO address(company_id , street_name,city,Country ) 
VALUES (
    ( SELECT company_id FROM company WHERE company_name = "google" ), 'Menlo Park','California','USA');
INSERT INTO address(company_id , street_name,city,Country ) 
VALUES (
    ( SELECT company_id FROM company WHERE company_name = "apple" ), 'Los Altos','California','USA');
