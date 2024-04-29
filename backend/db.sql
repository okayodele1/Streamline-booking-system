CREATE TABLE `salon`.`appointment` (
    `appointment_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(45) NOT NULL,
    `appointment_date` DATETIME NOT NULL,
    `service_name` VARCHAR(255) NOT NULL,
    `stylist` VARCHAR(255) NOT NULL,
    `user_id` INT NOT NULL,
    `service_id` INT NOT NULL,
    `appointment_time` TIME NOT NULL,
    PRIMARY KEY (`appointment_id`)
) ENGINE=InnoDB;

CREATE TABLE `salon`.`user` (
    `user_id` INT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`user_id`)
) ENGINE=InnoDB;

CREATE TABLE `salon`.`stylist` (
    `stylist_id` INT NOT NULL AUTO_INCREMENT,
    `stylist_name` TEXT NOT NULL,
    `stylist_image` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`stylist_id`)
) ENGINE=InnoDB;

CREATE TABLE `salon`.`services` (
    `services_id` INT NOT NULL AUTO_INCREMENT,
    `service_name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `price` DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (`services_id`)
) ENGINE=InnoDB;
