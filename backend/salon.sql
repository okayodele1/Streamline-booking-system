-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2024 at 11:46 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `salon`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `appointment_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `appointment_date` datetime NOT NULL,
  `service_name` varchar(255) NOT NULL,
  `stylist` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `appointment_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`appointment_id`, `name`, `email`, `phone`, `appointment_date`, `service_name`, `stylist`, `user_id`, `service_id`, `appointment_time`) VALUES
(1, 'Tolu', 'taystein435@gmail.com', '+3444444444', '2024-04-29 17:39:45', 'Haircut4', 'John Doe', 0, 0, '17:39:45'),
(2, 'ABISOLA MOTUNRAYO OLAONIPEKUN', 'professorofcare@gmail.com', '07786272352', '2024-04-29 17:42:45', 'afro', 'jojn', 0, 0, '17:42:45'),
(3, 'Tolu', 'taystein435@gmail.com', '+3444444444', '2024-04-29 17:44:05', 'Haircut4', 'John Doe', 0, 0, '17:44:05'),
(4, 'jame', 'professorofcare@gmail.com', '08061378265', '2024-05-02 08:31:56', 'braid', 'nelson', 0, 0, '08:31:56'),
(10, 'george', 'george1@gmail.com', '876537389393', '2024-05-07 00:00:00', 'Barbing', 'Sharon', 0, 0, '12:00:00'),
(12, 'sunday', 'sunday@gmail.com', '994744849948', '2024-05-08 00:00:00', 'Barbing', 'Jay', 0, 0, '14:00:00'),
(13, 'bode thomas', 'motunrayo@gmail.com', '07786272069', '2024-05-11 00:00:00', 'Dreadlock', 'Sharon', 0, 0, '13:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `services_id` int(11) NOT NULL,
  `service_name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stylist`
--

CREATE TABLE `stylist` (
  `stylist_id` int(11) NOT NULL,
  `stylist_name` text NOT NULL,
  `stylist_image` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `email`) VALUES
(1, 'Test22', '$2a$10$yJqzH.7P8zp5E9CngvI8sOMfhwfhAU6bbmYGi4SB/nYrZuHTQYEP.', 'test22@gmail.com'),
(2, 'AYODELE', '$2a$10$x3HCNt/2e2A5ulDL6bQTxOb4UDw5CE5RiHA6bLwhtcgWRM/4v2ZJe', 'hojaysunny@gmail.com'),
(3, 'regina', '$2a$10$5Crfz9z9GwGWi0SAOAMGY.8.eCR8HcWHRQDbv.7oco7kNrhuTy25m', 'regina7@gmail.com'),
(4, 'Shantel', '$2a$10$hstO4cyszjUgUX7BvSJ2uOW6Gs8pkTxjEXMFhB0dFMzjw900bLaqG', 'shan1@gmail.com'),
(5, 'george', '$2a$10$DmLfR7FMYxEDp.7sqyuUj.gLLXKW9YahFcYU/ox3DvUOnoW5yh8H2', 'george1@gmail.com'),
(6, 'william', '$2a$10$QExtPV3BkjAoKq3yLx6wxexQF5tF/oZIxtEeVLtZJR4FDE6dbYUs.', 'william1@gmail.com'),
(7, 'sunday', '$2a$10$kDD7J5QoUzcup2k5ZahBruz.UcrwjxdRCAPUGCz5aMjYOo.rB9Pqy', 'sunday@gmail.com'),
(8, 'James', '$2a$10$I1cjghvPTmJZ5/iSSC349uzNHc1oPfMcVW7Nn/Dq4yBWkRawMtPje', 'james@dev.com'),
(9, 'bode thomas', '$2a$10$ouf4GrfbSQsm0TZ5xYPjVOIKL6WfjAO0niBVAKNWesqYVQ0hpcFz6', 'motunrayo@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`appointment_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`services_id`);

--
-- Indexes for table `stylist`
--
ALTER TABLE `stylist`
  ADD PRIMARY KEY (`stylist_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `appointment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `services_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stylist`
--
ALTER TABLE `stylist`
  MODIFY `stylist_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
