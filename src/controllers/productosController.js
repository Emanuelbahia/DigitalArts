const path = require("path");
const fs = require("fs");

const cuadrosFilePath = path.join(__dirname, "../data/products.json");
const cuadros = JSON.parse(fs.readFileSync(cuadrosFilePath, "utf-8"));

const productosController = {
  /* categoria de cuadros */
  cuadros: function (req, res) {
    const cuadros = JSON.parse(fs.readFileSync(cuadrosFilePath, "utf-8"));
    let category = req.params.category;
    let categoryProducts = cuadros.filter((cuadro) => {
      return cuadro.category == category;
    });
    res.render("products", { categoryProducts });
  },

  /* detalle del producto */
  detail: function (req, res) {
    const cuadros = JSON.parse(fs.readFileSync(cuadrosFilePath, "utf-8"));
    let id = req.params.id;

    let detailProduct = cuadros.find((cuadro) => cuadro.id == id);

    return res.render("detail", { detailProduct });
  },

  /* crear producto */
  formCreate: function (req, res) {},

  create: function (req, res) {},

  /* editar producto */
  formEdit: function (req, res) {},

  edit: function (req, res) {},

  /* eliminar producto */
  delete: function (req, res) {},
};

module.exports = productosController;
