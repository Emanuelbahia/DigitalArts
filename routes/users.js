const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();

router.get("/register", usersController.register);
router.get("/registro_de_artistas", usersController.registro_de_artistas);

module.exports = router;
