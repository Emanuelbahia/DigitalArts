const express = require("express");
const path = require("path");
const productsController = require("../controllers/productsController");
const router = express.Router();
const multer = require("multer");
const { body } = require("express-validator");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

const validations = [
  //los campos no tienen q estar vacios y tienen q tener como minimo una cierta cantidad de caracteres
  body("name")
    .notEmpty()
    .withMessage("Tienes que ponerle un nombre")
    .isLength({ min: 5 })
    .withMessage("Tiene que tener 5 caracteres como minimo"),
  body("price")
    .notEmpty()
    .withMessage("Tienes que ponerle un precio")
    .isLength({ min: 5 })
    .withMessage("Tiene que tener 3 caracteres como minimo"),
  body("size")
    .notEmpty()
    .withMessage("Tienes que ponerle un tamaño")
    .isLength({ min: 5 })
    .withMessage("Tiene que tener 3 caracteres como minimo"),
];

/* ruta de crear un producto (Create)*/
router.get("/create", productsController.formCreate);
router.post(
  "/create",
  validations,
  upload.single("name"),

  productsController.create
);

/* ruta para crear una categoria */
router.get("/category/create", productsController.formCreateCategory);
router.post("/category", productsController.createCategory);

/* ruta para crear una descripcion */
router.get("/description/create", productsController.formCreateDescription);
router.post("/description", productsController.createDescription);

/* ruta para crear material */
router.get("/material/create", productsController.formCreateMaterial);
router.post("/material", productsController.createMaterial);

/* ruta categoria de cuadros (Read) */
router.get("/:category", productsController.cuadros);

/* ruta detalle de producto */
router.get("/detail/:id", productsController.detail);

/* ruta de editar un producto  (Update)*/
router.get("/edit/:id", productsController.formEdit);
router.put("/edit/:id", productsController.edit);

/* ruta de eliminar un producto  (Delete)*/
router.delete("/delete/:id", productsController.delete);

module.exports = router;
