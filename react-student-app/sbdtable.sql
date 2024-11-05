-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 05, 2024 at 07:35 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `sbdtable`
--

CREATE TABLE `sbdtable` (
  `rollno` varchar(12) NOT NULL,
  `name` varchar(100) NOT NULL,
  `bmail` varchar(100) DEFAULT NULL,
  `pslevel` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `cgpa` float(11,2) DEFAULT NULL,
  `lab` varchar(100) DEFAULT NULL,
  `pr` int(100) DEFAULT NULL,
  `fr` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sbdtable`
--

INSERT INTO `sbdtable` (`rollno`, `name`, `bmail`, `pslevel`, `year`, `cgpa`, `lab`, `pr`, `fr`) VALUES
('120', 'ABD', 'ABD@gmail.com', 5, 3, 10.00, '0', 0, 0),
('7376221CE110', 'DHAYABHARAN M J', 'db@bitsathy.ac.in', 1000, 3, 10.00, 'EX-AI', 1, 1),
('7376222AS120', 'VEGETA(PRINCE OF SAIYAN\'S)', 'vegeta@bitsathy.ac.in', 1000, 3, 8.50, 'SAIYAN LAB', 1, 1),
('7376222AX120', 'BENJAMIN TENNYSON', 'ben10@bitsathy.ac.in', 1000, 3, 7.00, 'PLUMBER', 1, 1),
('7376222AZ120', 'GOKU(KAKAROT)', 'kakarot@bitsathy.ac.in', 100, 3, 8.29, 'HEAVEN', 1, 1),
('7376222IT120', 'BHARANI DHARAUN A', 'bharanidharaun.it22@bitsathy.ac.in', 5, 3, 8.52, 'AI', 12, 12),
('7376222IT160', 'JK', 'jk@bitsathy.ac.in', 5, 3, 8.00, 'MOBILE & WEB', 8, 8),
('7376222IT274', 'UDHAYAA V D', 'udhayaa.it22@bitsathy.ac.in', 4, 3, 8.20, 'MOBILE & WEB', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sbdtable`
--
ALTER TABLE `sbdtable`
  ADD PRIMARY KEY (`rollno`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
