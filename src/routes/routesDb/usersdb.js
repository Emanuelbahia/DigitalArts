const express = require("express");
const usersControllerDb = require("../../controllers/controllersDb/usersControllersDb");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");
const guestMiddleware = require("../../middlewares/guestMiddleware");
const authMiddleware = require("../../middlewares/authMiddleware");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../../public/images/users"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

const validations = [
  body("name").notEmpty().withMessage("Debes completar el campo nombre"),
  body("surname").notEmpty().withMessage("Debes completar el campo apellido"),
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un email")
    .bail()
    .isEmail()
    .withMessage("Tienes que poner un formato de correo válido"),
  body("password").notEmpty().withMessage("Tienes que poner una contraseña"),
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
router.get("/register", guestMiddleware, usersControllerDb.register);

// procesar el registro
router.post(
  "/register",
  upload.single("avatar"),
  validations,
  usersControllerDb.processRegister
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
  body("confirmPassword")
    .notEmpty()
    .withMessage("Tienes que confirmar la contraseña"),
];
//formulario de login

module.exports = router;
