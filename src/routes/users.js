const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");

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
router.get("/register", usersController.register);

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
body("confirmPassword")
  .notEmpty()
  .withMessage("Tienes que confirmar la contraseña"),
]
//formulario de login
router.get("/login", usersController.login);


//Procesar el login
router.post("/login",validateLog , usersController.loginProcess);

//perfil
//router.get('/users/:userId', usersController.profile)

module.exports = router;
