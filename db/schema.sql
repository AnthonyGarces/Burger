/*Create and use the burger database*/
DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;

/*create a table for the burgers*/
CREATE TABLE `burgers` (
    `id` Int(11) AUTO_INCREMENT NOT NULL,
    `burger_name` VARCHAR(255) NOT NULL,
    `devoured` BOOLEAN,
)