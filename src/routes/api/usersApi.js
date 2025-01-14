const express = require("express");
const router = express.Router();
const usersApiController = require("../../controllers/api/usersAPIController");

//Rutas
//Listado de usuarios
router.get("/", usersApiController.list);

//ultimo usuario registrado
router.get("/last", usersApiController.lastUser);

//Detalle de usuario
router.get("/:id", usersApiController.detail);

module.exports = router;
