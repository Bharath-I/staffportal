CREATE DATABASE staffportal;

USE staffportal;

CREATE TABLE permissions (

    id INT AUTO_INCREMENT PRIMARY KEY,

    employee_name VARCHAR(100),

    employee_id VARCHAR(50),

    department VARCHAR(100),

    permission_date VARCHAR(50),

    from_time VARCHAR(50),

    to_time VARCHAR(50),

    reason TEXT

);