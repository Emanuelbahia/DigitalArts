const express = require("express");
const cartController = require("../controllers/cartController");
const router = express.Router();

router.get("/:id", cartController.carrito);

module.exports = router;
