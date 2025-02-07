-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 07, 2025 at 12:33 PM
-- Server version: 8.0.40
-- PHP Version: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proyecto_utn`
--

-- --------------------------------------------------------

--
-- Table structure for table `novedades`
--

CREATE TABLE `novedades` (
  `id` int NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'STAY @ Palermo Hollywood (Soler)', 'Soler 5560, Palermo, C1425BYF Buenos Aires, Argentina\r\nUbicación excelente, ¡puntuada con 9.9/10!(puntuación basada en 57 comentarios)\r\nValorado por los clientes después de alojarse en el STAY @ Palermo Hollywood (Soler).\r\n', 'STAY @ Palermo Hollywood (Soler) está en el barrio de Palermo, en Buenos Aires, y tiene aire acondicionado, balcón y vistas a la ciudad. Se encuentra a 14 min a pie de Plaza Serrano y dispone de wifi gratis, además de servicio de conserjería.\r\n\r\nEl apartamento cuenta con TV de pantalla plana vía satélite. La cocina dispone de nevera, horno y microondas, y hay bidet, artículos de aseo gratuitos y secador de pelo.\r\n\r\nBosques de Palermo está a 2,8 km del alojamiento, y Lagos de Palermo está a 2,8 km. El aeropuerto (Aeroparque Jorge Newbery) está a 6 km.\r\n\r\nA las parejas les encanta la ubicación — Le han puesto un 9,9 para viajes de dos personas.'),
(2, 'olivos green', 'Libertador al 3000', 'Cercano al rio, espacios verdes, oferta gastronomica '),
(3, 'Modern Studio in Palermo Hollywood', 'Nicaragua 5769, Palermo, 1414 Buenos Aires, Argentina\r\nUbicación excelente, ¡puntuada con 9.9/10!(puntuación basada en 21 comentarios)\r\nValorado por los clientes después de alojarse en el Modern Studio in Palermo Hollywood.\r\n', 'Modern Studio in Palermo Hollywood, que tiene vistas al jardín, dispone de alojamiento con piscina al aire libre y balcón a unos 3 km de Parque El Rosedal. Este alojamiento con aire acondicionado está a 15 min a pie de Plaza Serrano y ofrece wifi gratis y parking privado en el propio alojamiento.\r\n\r\nEl apartamento dispone de 1 dormitorio, 1 baño, ropa de cama, toallas, TV de pantalla plana con canales por cable, zona de comedor, cocina totalmente equipada y terraza con vistas a la ciudad.\r\n\r\nBosques de Palermo está a 3,1 km del alojamiento, y Lagos de Palermo está a 3,1 km. El aeropuerto (Aeroparque Jorge Newbery) está a 6 km.\r\n\r\n'),
(4, 'Modern Studio in Palermo Hollywood', 'Nicaragua 5769, Palermo, 1414 Buenos Aires, Argentina\r\nUbicación excelente, ¡puntuada con 9.9/10!(puntuación basada en 21 comentarios)\r\nValorado por los clientes después de alojarse en el Modern Studio in Palermo Hollywood.\r\n', 'Modern Studio in Palermo Hollywood, que tiene vistas al jardín, dispone de alojamiento con piscina al aire libre y balcón a unos 3 km de Parque El Rosedal. Este alojamiento con aire acondicionado está a 15 min a pie de Plaza Serrano y ofrece wifi gratis y parking privado en el propio alojamiento.\r\n\r\nEl apartamento dispone de 1 dormitorio, 1 baño, ropa de cama, toallas, TV de pantalla plana con canales por cable, zona de comedor, cocina totalmente equipada y terraza con vistas a la ciudad.\r\n\r\nBosques de Palermo está a 3,1 km del alojamiento, y Lagos de Palermo está a 3,1 km. El aeropuerto (Aeroparque Jorge Newbery) está a 6 km.\r\n\r\n'),
(5, 'depto13', 'prueba', 'prueba'),
(6, 'depto13', 'prueba', 'prueba');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
