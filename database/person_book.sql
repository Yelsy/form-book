CREATE TABLE data_book (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    dni VARCHAR(50) NOT NULL,
    email VARCHAR(250) NOT NULL,
    phone VARCHAR(250) NOT NULL,
    total INT NOT NULL,
    description VARCHAR(100) NULL
);


INSERT INTO data_book (name, dni, email, phone, total, description) VALUES ('MARIROSA', '123156', 'mari@gmail.com', 960476260, 4, 'Hola todo bien');
