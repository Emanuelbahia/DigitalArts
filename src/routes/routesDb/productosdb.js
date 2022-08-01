const express = require("express");
const path = require("path");
const productosControllerDb = require("../../controllers/controllersDb/productosControllerDb")
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

/* ruta de crear un producto */
router.get("/products/create", productosControllerDb.formCreate);
router.post("/products", upload.single("image"), productosControllerDb.create);

/* ruta detalle de producto */
router.get("/products/detail/:id", productosControllerDb.detail);

/* ruta de editar un producto */
router.get("/products/edit/:id", productosControllerDb.formEdit);
router.put("/products/edit/:id", productosControllerDb.edit);

/* ruta de eliminar un producto */
router.delete("/products/delete/:id", productosControllerDb.delete);

module.exports = router;





