const express = require("express");
const productosController = require("../controllers/productosController");
const router = express.Router();

router.get("/products/:category", productosController.cuadros);

module.exports = router;
