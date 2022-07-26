-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-07-2022 a las 19:59:23
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_digital_arts`
--

--
-- Volcado de datos para la tabla `category_products`
--

INSERT INTO `category_products` (`ID`, `category`) VALUES
(1, 'abstractoEspatula'),
(2, 'abstractoPincel'),
(3, 'pouring'),
(4, 'fotomontaje'),
(5, 'cuadroDecorativo'),
(6, 'artistasNuevos');

--
-- Volcado de datos para la tabla `description_products`
--

INSERT INTO `description_products` (`ID`, `description`) VALUES
(1, 'técnica de acrílico con espátula'),
(2, 'técnica de acrílico con pincel'),
(3, 'técnica de Pouring'),
(4, 'técnica de Fotomontaje'),
(5, 'técnica de impresión de Vinilo Mate con tintas Lát');

--
-- Volcado de datos para la tabla `material_products`
--

INSERT INTO `material_products` (`ID`, `material`) VALUES
(1, 'Bastidor en lienzo'),
(2, 'Bastidor macizo en madera'),
(3, 'Madera');

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`ID`, `name`, `image`, `size`, `price`, `material_id`, `description_id`, `category_id`, `vendido_id`) VALUES
(1, 'abstracto espátula', 'abstracto espatula 1m.jpg', '60x80', 16000, 1, 1, 1, NULL),
(2, 'rostro', 'abstracto espatula 2m.jpg', '40x50', 13100, 1, 1, 1, NULL),
(3, 'payaso it', 'abstracto espatula 3m.jpg', '40x60', 18500, 1, 1, 1, NULL),
(4, 'flores al viento', 'abstracto espatula 4m.jpg', '40x40', 13600, 1, 1, 1, NULL),
(5, 'cruz con espatula', 'abstracto espatula 5m.jpg', '60x80', 15000, 1, 1, 1, NULL),
(6, 'espátula nórdico', 'abstracto espatula 6m.jpg', '50x70', 18400, 1, 1, 1, NULL),
(7, 'esencialismo', 'abstracto espatula 7m.jpg', '60x80', 19200, 1, 1, 1, NULL),
(8, 'edificios', 'abstracto espatula 8m.jpg', '70x90', 22400, 1, 1, 1, NULL),
(9, 'corazones sobre el mar', 'abstracto espatula 9m.jpg', '70x90', 26400, 1, 1, 1, NULL),
(10, 'caballo espatula', 'abstracto espatula 10m.jpg', '50x60', 23800, 1, 1, 1, NULL),
(11, 'paleta de colores', 'abstracto espatula 11m.jpg', '40x60', 15700, 1, 1, 1, NULL),
(12, 'paraguas bajo la lluvia', 'abstracto pincel 1m.jpg', '50x70', 23500, 1, 2, 2, NULL),
(13, 'burbujas', 'abstracto pincel 2m.jpg', '70x90', 25200, 1, 2, 2, NULL),
(14, 'cara it', 'abstracto pincel 3m.jpg', '50x70', 28400, 1, 2, 2, NULL),
(15, 'abstracto con pincel', 'abstracto pincel 4m.jpg', '70x90', 16900, 1, 2, 2, NULL),
(16, 'esencialismo escandinavo', 'abstracto pincel 5m.jpg', '60x80', 16700, 1, 2, 2, NULL),
(17, 'banner it', 'abstracto pincel 6m.jpg', '90x60', 25800, 1, 2, 2, NULL),
(18, 'abstracto amarillo', 'abstracto pincel 7m.jpg', '60x80', 19200, 1, 2, 2, NULL),
(19, 'el guason', 'abstracto pincel 8m.jpg', '100x80', 28700, 1, 2, 2, NULL),
(20, 'elefante africano', 'abstracto pincel 9m.jpg', '60x80', 23500, 1, 2, 2, NULL),
(21, 'esencialismo multicolor', 'abstracto pincel 10m.jpg', '60x80', 14800, 1, 2, 2, NULL),
(22, 'pouring blue', 'pouring 1m.jpg', '40x40', 16500, 1, 3, 3, NULL),
(23, 'pouring black and white', 'pouring 2m.jpg', '40x40', 18400, 1, 3, 3, NULL),
(24, 'pouring cosmo', 'pouring 3m.jpg', '45x65', 15700, 1, 3, 3, NULL),
(25, 'pouring balls', 'pouring 4m.jpg', '45x65', 15800, 1, 3, 3, NULL),
(26, 'pouring', 'pouring 5m.jpg.jpg', '30x30', 13200, 1, 3, 3, NULL),
(27, 'pouring green', 'pouring 6m.jpg.jpg', '30x30', 13400, 1, 3, 3, NULL),
(28, 'rostro en fotomontaje', 'fotomontaje 1m.jpg', '90x60', 22800, 3, 4, 4, NULL),
(29, 'escena globo de it', 'fotomontaje 2m.jpg', '50x70', 28400, 3, 4, 4, NULL),
(30, 'copas de vino', 'cuadro decorativo.png', '200x150', 21000, 2, 5, 5, NULL),
(31, 'tigre blanco', 'cuadro decorativo1.png', '200x150', 24500, 2, 5, 5, NULL),
(32, 'vintage con mariposa', 'cuadro decorativo2.png', '200x150', 19200, 2, 5, 5, NULL),
(33, 'guason en la carcel', 'cuadro decorativo3.png', '200x150', 22000, 2, 5, 5, NULL),
(34, 'viajeros', 'cuadro decorativo4.png', '200x150', 24800, 2, 5, 5, NULL),
(35, 'mapamundi', 'cuadro decorativo5.png', '200x150', 18600, 2, 5, 5, NULL),
(36, 'fase de lunas', 'cuadro decorativo6.png', '200x150', 23800, 2, 5, 5, NULL),
(37, 'mandala', 'cuadro decorativo7.png', '200x150', 9600, 2, 5, 5, NULL),
(38, 'frase', 'cuadro decorativo8.png', '200x150', 9800, 2, 5, 5, NULL),
(39, 'bosque violeta', 'artista nuevo 1.jpg.jpg', '40x70', 16000, 2, 1, 6, NULL),
(40, 'ardillas', 'artista nuevo 2.jpg.jpg', '40x70', 18000, 2, 1, 6, NULL),
(41, 'abstracto nuevo', 'artista nuevo 3.jpg.jpg', '30x70', 22400, 2, 1, 6, NULL),
(42, 'botones de jostick', 'artista nuevo 4.jpg.jpg', '50x80', 16700, 2, 1, 6, NULL),
(43, 'el primero', 'artista nuevo 5.jpg.jpg', '50x70', 18500, 2, 1, 6, NULL),
(44, 'nota musical', 'artista nuevo 6.jpg.jpg', '70x50', 22800, 2, 1, 6, NULL),
(45, 'barcos', 'artista nuevo 7.jpg.jpg', '30x70', 23800, 2, 1, 6, NULL),
(46, 'esencialismo abstracto', 'artista nuevo 8.jpg.jpg', '50x70', 19600, 2, 1, 6, NULL);

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`ID`, `firstName`, `lastName`, `email`, `password`, `image`) VALUES
(1, 'Stephen', 'King', 'stephenking@gmail.com', 'stephen1950', ''),
(2, 'Clive', 'Barker', 'clivebarker@gmail.com', 'soyclive1975', ''),
(3, 'Madonna', 'King', 'madonnaking@gmail.com', 'madonna1990', ''),
(4, 'carolina', 'cirillo', 'carolinacirillo@hotmail.com', '$2a$10$MsCElxJIVnpUD7//Wx0fTeTFMUyo8AyjOaewY1.HKZd0j0vKbTD36', '1657141126546.png'),
(5, 'emanuel', 'azcona', 'emanuelazcona@hotmail.com', '$2a$10$NlnK2Ly.tf/EFO/r7EB8UO3KFL.VRH4DET7vfSISc/EbsAa9YbWmi', '1657139988366.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;