const express = require("express");
const carritoController = require("../controllers/carritoController");
const router = express.Router();

router.get("/:id", carritoController.carrito);

module.exports = router;
