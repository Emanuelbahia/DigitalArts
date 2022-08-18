const express = require("express");
const path = require("path");
const productosControllerDb = require("../../controllers/controllersDb/productosControllerDb");
const router = express.Router();
const multer = require("multer");
const { body } = require("express-validator");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../../public/images"));
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
router.get("/create", productosControllerDb.formCreate);
router.post(
  "/create",
  upload.single("image"),
  validations,
  productosControllerDb.create
);

/* ruta para crear una categoria */
router.get("/category/create", productosControllerDb.formCreateCategory);
router.post("/category", productosControllerDb.createCategory);

/* ruta para crear una descripcion */
router.get("/description/create", productosControllerDb.formCreateDescription);
router.post("/description", productosControllerDb.createDescription);

/* ruta para crear material */
router.get("/material/create", productosControllerDb.formCreateMaterial);
router.post("/material", productosControllerDb.createMaterial);

/* ruta categoria de cuadros (Read) */
router.get("/:category", productosControllerDb.cuadros);

/* ruta detalle de producto */
router.get("/detail/:id", productosControllerDb.detail);

/* ruta de editar un producto  (Update)*/
router.get("/edit/:id", productosControllerDb.formEdit);
router.put("/edit/:id", productosControllerDb.edit);

/* ruta de eliminar un producto  (Delete)*/
router.delete("/delete/:id", productosControllerDb.delete);

module.exports = router;
