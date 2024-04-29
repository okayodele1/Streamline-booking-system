-- Create database
CREATE DATABASE IF NOT EXISTS salon_appointments;
USE salon_appointments;


CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);


CREATE TABLE IF NOT EXISTS services (
    service_id INT AUTO_INCREMENT PRIMARY KEY,
    service_name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);


CREATE TABLE IF NOT EXISTS appointments (
    appointment_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    service_id INT NOT NULL,
    appointment_date DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (service_id) REFERENCES services(service_id)
);


INSERT INTO users (username, password, email) VALUES 
('user1', 'password1', 'test1@example.com'),
('user2', 'password2', 'test2@example.com');

INSERT INTO services (service_name, description, price) VALUES 
('Haircut', 'Basic haircut', 30.00),
('Hair Color', 'Hair coloring service', 50.00);

