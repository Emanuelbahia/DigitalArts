const express = require("express");
const productosController = require("../controllers/productosController");
const router = express.Router();
/*
router.get("/cuadros_decorativos", productosController.cuadros_decorativos);
router.get("/cuadros_artistas_nuevos",productosController.cuadros_artistas_nuevos);
router.get("/abstracto_espatula", productosController.abstracto_espatula);
router.get("/abstracto_pincel", productosController.abstracto_pincel);
router.get("/fotomontaje", productosController.fotomontaje);
router.get("/pouring", productosController.pouring);
*/

router.get("/products", productosController.cuadros);

module.exports = router;
