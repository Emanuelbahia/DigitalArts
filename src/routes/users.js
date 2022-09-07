const express = require("express");
const usersController = require("../controllers/usersControllers");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images/users"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

const validations = [
  //el campo nombre no tiene q estar vacio y mas de 2 caracteres
  body("name")
    .notEmpty()
    .withMessage("Debes completar el campo nombre")
    .isLength({ min: 2 })
    .withMessage("Tiene que tener mas de 2 caracteres"),
  //el campo apellido no tiene q estar vacio y mas de 2 caracteres
  body("surname")
    .notEmpty()
    .withMessage("Debes completar el campo apellido")
    .isLength({ min: 2 })
    .withMessage("Tiene que tener mas de 2 caracteres"),
  //el campo email no puede estar vacio, tiene q tener un formato de email valido
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un email")
    .bail()
    .isEmail()
    .withMessage("Tienes que poner un formato de correo válido"),
  body("password")
    .notEmpty()
    .withMessage("Tienes que poner una contraseña")
    .isLength({ min: 2 })
    .withMessage("Tiene que tener mas de 6 caracteres"),
  body("confirmPassword")
    .notEmpty()
    .withMessage("Tienes que confirmar la contraseña"),
  body("avatar").custom((value, { req }) => {
    let file = req.file;
    if (!file) {
      throw new Error("tienes que subir una imagen de perfil");
    }
    return true;
  }),
];

// formulario de registro

//si esta registrado, el middleware de ruta no me deja ir al form de register, me redirige al home
router.get("/register", guestMiddleware, usersController.register);

// procesar el registro
router.post(
  "/register",
  upload.single("avatar"),
  validations,
  usersController.processRegister
);
//validacion de login
const validateLog = [
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un email")
    .bail()
    .isEmail()
    .withMessage("Tienes que poner un formato de correo válido"),
  body("password").notEmpty().withMessage("Tienes que poner una contraseña"),
  /*   body("confirmPassword")
    .notEmpty()
    .withMessage("Tienes que confirmar la contraseña"), */
];
//formulario de login

//si esta registrado, el middleware de ruta no me deja ir al form de login, me redirige al home
router.get("/login", guestMiddleware, usersController.login);

//Procesar el login
router.post("/login", validateLog, usersController.loginProcess);

//perfil

//con el middleware si no tengo a nadie en sesion y quiero entrar a /usersDb/profile me redirije al login
router.get("/profile/", authMiddleware, usersController.profile);

//logout
router.get("/logout/", usersController.logout);

module.exports = router;

/* [
  body("email").isEmail().withMessage("Email inválido"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña es inválida"),
] */
