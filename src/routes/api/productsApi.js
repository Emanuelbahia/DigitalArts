const express = require("express");
const router = express.Router();
const productsApiController = require("../../controllers/api/productsAPIController");

//ruta para la cantidad de productos
router.get("/", productsApiController.list);

//ruta para traer al producto por id
router.get("/:id", productsApiController.product);

//ruta para la cantidad de categorias
router.get("/category", productsApiController.category);

//ruta para el ultimo producto creado
router.get("/last", productsApiController.lastProduct);

//ruta para la cantidad de cada producto
router.get("/quantity/:id", productsApiController.quantity);

module.exports = router;
