const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();
const multer = require ("multer");
const path = require ("path");
const { body } = require("express-validator")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "./public/images"));
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  const upload = multer({ storage });

  const validations = [
    body('name').notEmpty,
    body('surname').notEmpty,
    body('email').notEmpty,
    body('password').notEmpty,
  ]

// formulario de registro
router.get("/register", usersController.register);

// procesar el registro
router.post("/register", upload.single('avatar'),validations, usersController.processRegister);


router.get("/registro_de_artistas", usersController.registro_de_artistas);



module.exports = router;
