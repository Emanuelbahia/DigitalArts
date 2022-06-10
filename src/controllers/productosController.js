const path = require("path");
const fs = require("fs");

const cuadrosFilePath = path.join(__dirname, "../data/products.json");
const cuadros = JSON.parse(fs.readFileSync(cuadrosFilePath, "utf-8"));

const productosController = {
  cuadros: function (req, res) {
    let cuadros = JSON.parse(fs.readFileSync(cuadrosFilePath, "utf-8"));
    let category = req.params.category;
    let categoryProducts = cuadros.filter((cuadro) => {
      return cuadro.category == category;
    });
    res.render("products", { categoryProducts });
  },
};

module.exports = productosController;
