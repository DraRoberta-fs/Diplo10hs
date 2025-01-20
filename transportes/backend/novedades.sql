-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jan 17, 2025 at 02:26 PM
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
-- Database: `transportesdiplo`
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
(1, 'Israel-Gaza ceasefire live: Netanyahu says hostage release to begin on Sunday if security cabinet approves deal', 'As cabinet meets, Benjamin Netanyahu’s office says ‘hostages expected to be released as early as Sunday’', 'On Wednesday, Egypt’s state-linked Al-Qahera News reported coordination was under way to reopen the Rafah crossing on the Gaza border, according to Agence France-Presse (AFP). It was one of the main humanitarian entry points but has been closed since Israeli forces seized the Palestinian side in May.\r\n\r\nThe ceasefire deal is based on a plan Joe Biden presented in mid-2024 that foresaw an increase in aid to 600 trucks a day, or more than eight times the December average reported by the UN.\r\n\r\nThe World Food Programme said on Thursday it had enough food for one million people “waiting outside Gaza or on its way”.\r\n\r\nOn the Egyptian side of the border, a source in the Egyptian Red Crescent told AFP up to 1,000 trucks are waiting “for their entry into Gaza”. But with airstrikes continuing to pound the territory, where aid groups and the UN have regularly accused Israel of impeding aid flows – which Israeli denies – aid workers were sceptical.'),
(2, 'Crisis en Venezuela EN VIVO: Nicolás Maduro juró ante la Asamblea del régimen y extiende su era dictatorial', 'Pese a los cuestionamientos internacionales y sin haber presentado las pruebas que demuestren su triunfo, Jorge Rodríguez encabezó el acto de juramentación', 'Tras una jornada marcada por la tensión y las manifestaciones en todo el país, este viernes se llevará a cabo la toma de posesión presidencial en Venezuela, en un contexto de alta conflictividad política.\r\n\r\nEl dictador Nicolás Maduro intentará usurpar el poder al asumir un tercer mandato como presidente ilegítimo en un acto respaldado por las instituciones serviles a su régimen, mientras Edmundo González Urrutia, reconocido como mandatario electo por gran parte de la comunidad internacional, promete regresar al país tras su gira por América, con el objetivo de asumir formalmente el liderazgo del Ejecutivo.\r\n\r\nA continuación, la cobertura minuto a minuto de los sucesos más relevantes sobre la crisis política en Venezuela:'),
(3, 'El Gobierno reforzó su apoyo a las protestas contra la dictadura de Maduro y reclama que asuma Edmundo González Urrutia', 'Milei condenó la detención que ordenó el dictador venezolano contra Corina Machado, la líder opositora. Francos participó en la movilización de la oposición al chavismo en Plaza de Mayo y Bullrich envió una carta a la comunidad venezolana en argentina', 'No es la primera vez que en Venezuela hay una toma del poder ilegal, sin legitimidad, como la que pretende llevar a cabo Nicolás Maduro hoy. Su mandato finaliza y debería hacer una transición con Edmundo González Urrutia, el candidato opositor que se impuso en las elecciones del 28 de julio de 2024. Como escribió Marx en el 18 de Brumario de Luis Bonaparte, la historia se repite primero como tragedia y después como farsa. El Gobierno argentino sigue de cerca los acontecimientos en Caracas, como el principal aliado regional al espacio de María Corina Machado que exige que el chavismo haga lugar al juramento de Urrutia. En otra muestra de apoyo, la Casa Rosada respaldó ayer la movilización que la comunidad venezolana hizo en Argentina y cuestionó la detención de la líder opositora.'),
(4, 'El Gobierno reforzó su apoyo a las protestas contra la dictadura de Maduro y reclama que asuma Edmundo González Urrutia', 'Milei condenó la detención que ordenó el dictador venezolano contra Corina Machado, la líder opositora. Francos participó en la movilización de la oposición al chavismo en Plaza de Mayo y Bullrich envió una carta a la comunidad venezolana en argentina', 'No es la primera vez que en Venezuela hay una toma del poder ilegal, sin legitimidad, como la que pretende llevar a cabo Nicolás Maduro hoy. Su mandato finaliza y debería hacer una transición con Edmundo González Urrutia, el candidato opositor que se impuso en las elecciones del 28 de julio de 2024. Como escribió Marx en el 18 de Brumario de Luis Bonaparte, la historia se repite primero como tragedia y después como farsa. El Gobierno argentino sigue de cerca los acontecimientos en Caracas, como el principal aliado regional al espacio de María Corina Machado que exige que el chavismo haga lugar al juramento de Urrutia. En otra muestra de apoyo, la Casa Rosada respaldó ayer la movilización que la comunidad venezolana hizo en Argentina y cuestionó la detención de la líder opositora.'),
(5, 'prueba1', 'prueba 1', 'prueba 1');

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
