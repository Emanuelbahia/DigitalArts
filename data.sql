-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-08-2022 a las 18:15:34
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
(6, 'artistasNuevos'),
(5, 'cuadroDecorativo'),
(4, 'fotomontaje'),
(3, 'pouring');

--
-- Volcado de datos para la tabla `description_products`
--

INSERT INTO `description_products` (`ID`, `description`) VALUES
(1, 'técnica de acrílico con espátula'),
(2, 'técnica de acrílico con pincel'),
(4, 'técnica de Fotomontaje'),
(5, 'técnica de impresión de Vinilo Mate con tintas Lát'),
(3, 'técnica de Pouring');

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
(1, 'abstracto espátula', 'abstracto espatula 1m.jpg', '60x80', 16000, 1, 1, 1, '2022-08-02 21:04:27'),
(2, 'rostro', 'abstracto espatula 2m.jpg', '40x50', 13100, 1, 1, 1, '2022-08-16 21:06:13'),
(3, 'payaso it', 'abstracto espatula 3m.jpg', '40x60', 18500, 1, 1, 1, '2022-08-16 21:06:13'),
(4, 'flores al viento', 'abstracto espatula 4m.jpg', '40x40', 13600, 1, 1, 1, '2022-08-11 21:06:13'),
(5, 'cruz con espatula', 'abstracto espatula 5m.jpg', '100x100', 15000, 1, 1, 1, '2022-08-17 21:06:13'),
(6, 'espátula nórdico', 'abstracto espatula 6m.jpg', '50x70', 18400, 1, 1, 1, '2022-08-24 21:06:13'),
(7, 'esencialismo', 'abstracto espatula 7m.jpg', '60x80', 19200, 1, 1, 1, '2022-08-17 21:06:13'),
(8, 'edificios', 'abstracto espatula 8m.jpg', '70x90', 22400, 1, 1, 1, '2022-08-04 21:06:13'),
(9, 'corazones sobre el mar', 'abstracto espatula 9m.jpg', '70x90', 26400, 1, 1, 1, '2022-08-05 21:06:13'),
(10, 'caballo espatula', 'abstracto espatula 10m.jpg', '50x60', 23800, 1, 1, 1, '2022-08-03 21:06:13'),
(11, 'paleta de colores', 'abstracto espatula 11m.jpg', '40x60', 15700, 1, 1, 1, '2022-08-23 21:06:13'),
(12, 'paraguas bajo la lluvia', 'abstracto pincel 1m.jpg', '50x70', 23500, 1, 2, 2, '2022-08-23 21:06:13'),
(13, 'burbujas', 'abstracto pincel 2m.jpg', '70x90', 25200, 1, 2, 2, '2022-08-19 21:06:13'),
(14, 'cara it', 'abstracto pincel 3m.jpg', '50x70', 28400, 1, 2, 2, '2022-08-18 21:06:13'),
(15, 'abstracto con pincel', 'abstracto pincel 4m.jpg', '70x90', 16900, 1, 2, 2, '2022-08-03 21:06:13'),
(16, 'esencialismo escandinavo', 'abstracto pincel 5m.jpg', '60x80', 16700, 1, 2, 2, '2022-08-19 21:06:13'),
(17, 'banner it', 'abstracto pincel 6m.jpg', '90x60', 25800, 1, 2, 2, '2022-08-05 21:06:13'),
(18, 'abstracto amarillo', 'abstracto pincel 7m.jpg', '60x80', 19200, 1, 2, 2, '2022-08-12 21:06:13'),
(19, 'el guason', 'abstracto pincel 8m.jpg', '100x80', 28700, 1, 2, 2, '2022-08-19 21:06:13'),
(20, 'elefante africano', 'abstracto pincel 9m.jpg', '60x80', 23500, 1, 2, 2, '2022-08-05 21:06:13'),
(21, 'esencialismo multicolor', 'abstracto pincel 10m.jpg', '60x80', 14800, 1, 2, 2, '2022-08-05 21:06:13'),
(22, 'pouring blue', 'pouring 1m.jpg', '40x40', 16500, 1, 3, 3, '2022-08-02 21:04:27'),
(23, 'pouring black and white', 'pouring 2m.jpg', '40x40', 18400, 1, 3, 3, '2022-08-19 21:05:17'),
(24, 'pouring cosmo', 'pouring 3m.jpg', '45x65', 15700, 1, 3, 3, '2022-08-19 21:05:17'),
(25, 'pouring balls', 'pouring 4m.jpg', '45x65', 15800, 1, 3, 3, '2022-08-31 21:05:52'),
(26, 'pouring', 'pouring 5m.jpg.jpg', '30x30', 13200, 1, 3, 3, '2022-08-17 21:08:27'),
(27, 'pouring green', 'pouring 6m.jpg.jpg', '30x30', 13400, 1, 3, 3, '2022-08-26 21:08:27'),
(28, 'rostro en fotomontaje', 'fotomontaje 1m.jpg', '90x60', 22800, 3, 4, 4, '2022-08-18 21:08:27'),
(29, 'escena globo de it', 'fotomontaje 2m.jpg', '50x70', 28400, 3, 4, 4, '2022-08-02 21:08:27'),
(30, 'copas de vino', 'cuadro decorativo.png', '200x150', 21000, 2, 5, 5, '2022-08-22 21:08:27'),
(31, 'tigre blanco', 'cuadro decorativo1.png', '200x150', 24500, 2, 5, 5, '2022-08-17 21:08:27'),
(32, 'vintage con mariposa', 'cuadro decorativo2.png', '200x150', 19200, 2, 5, 5, '2022-08-06 21:08:27'),
(33, 'guason en la carcel', 'cuadro decorativo3.png', '200x150', 22000, 2, 5, 5, '2022-08-18 21:08:27'),
(34, 'viajeros', 'cuadro decorativo4.png', '200x150', 24800, 2, 5, 5, '2022-08-18 21:08:27'),
(35, 'mapamundi', 'cuadro decorativo5.png', '200x150', 18600, 2, 5, 5, '2022-08-16 21:08:27'),
(36, 'fase de lunas', 'cuadro decorativo6.png', '200x150', 23800, 2, 5, 5, '2022-08-18 21:08:27'),
(37, 'mandala', 'cuadro decorativo7.png', '200x150', 9600, 2, 5, 5, '2022-08-25 21:08:27'),
(38, 'frase', 'cuadro decorativo8.png', '200x150', 9800, 2, 5, 5, '2022-08-18 21:08:27'),
(39, 'bosque violeta', 'artista nuevo 1.jpg.jpg', '40x70', 16000, 2, 1, 6, '2022-08-11 21:08:27'),
(40, 'ardillas', 'artista nuevo 2.jpg.jpg', '40x70', 18000, 2, 1, 6, '2022-08-10 21:08:27'),
(41, 'abstracto nuevo', 'artista nuevo 3.jpg.jpg', '30x70', 22400, 2, 1, 6, '2022-08-10 21:08:27'),
(42, 'botones de jostick', 'artista nuevo 4.jpg.jpg', '50x80', 16700, 2, 1, 6, '2022-08-11 21:08:27'),
(43, 'el primero', 'artista nuevo 5.jpg.jpg', '50x70', 18500, 2, 1, 6, '2022-08-10 21:08:27'),
(44, 'nota musical', 'artista nuevo 6.jpg.jpg', '70x50', 22800, 2, 1, 6, '2022-08-09 21:08:27'),
(45, 'barcos', 'artista nuevo 7.jpg.jpg', '30x70', 23800, 2, 1, 6, '2022-08-18 21:08:27'),
(46, 'esencialismo abstracto', 'artista nuevo 8.jpg.jpg', '50x70', 19600, 2, 1, 6, '2022-08-10 21:08:27'),
(47, 'prueba', '1659727875916.jpg', '40x40', 10000, 1, 1, 1, '2022-08-22 21:09:36'),
(49, 'nuevooo', '1659880917329.jpg', '1000x10000', 150, 1, 1, 1, '2022-08-02 21:04:27');

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`ID`, `firstName`, `lastName`, `email`, `password`, `image`, `isAdmin`) VALUES
(1, 'Stephen', 'King', 'stephenking@gmail.com', 'stephen1950', '', 0),
(2, 'Clive', 'Barker', 'clivebarker@gmail.com', 'soyclive1975', '', 0),
(3, 'Madonna', 'King', 'madonnaking@gmail.com', 'madonna1990', '', 0),
(4, 'carolina', 'cirillo', 'carolinacirillo@hotmail.com', '$2a$10$MsCElxJIVnpUD7//Wx0fTeTFMUyo8AyjOaewY1.HKZd0j0vKbTD36', '1657141126546.png', 1),
(5, 'emanuel', 'azcona', 'emanuelazcona@hotmail.com', '$2a$10$NlnK2Ly.tf/EFO/r7EB8UO3KFL.VRH4DET7vfSISc/EbsAa9YbWmi', '1657139988366.jpg', 1),
(6, 'nuevooo', 'otrooooo', 'prueba@hotmail.com', '$2a$10$FUzvEwBrwWuhTc4l9PZb.ugfy56lS/FDNzvpg4aEhAlmP.E2tUJiC', '1659826051845.jpg', 0),
(7, 'otro', 'otro', 'otro@hotmail.com', '$2a$10$E9/vbzjSWYmDUiizIoNCWeIuANlQNvQI1q9aP.LeWbZvCbPQCfSrq', '1659826549223.jpg', 0),
(8, 'nuevooo', 'otrooooo', 'prueba@hotmail.com', '$2a$10$Nwefemf2smSAEHFBL/ePU.GwNiebdzKt60d794RZj/uWr4rxlCaT6', '1659830319077.jpg', 0),
(10, 'otro de prueba', 'otreee', 'hola@hotmail.com', '$2a$10$Ax1oxx38.pqrpipfCikPqu426U1FbNIhDnV8PNhuPq1AxCJd3pAme', '1660004600117.jpg', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;