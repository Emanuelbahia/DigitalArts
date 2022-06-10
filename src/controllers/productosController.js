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

  /*
  cuadros_artistas_nuevos: function (req, res) {
    res.render("cuadros_artistas_nuevos");
  },

  abstracto_espatula: function (req, res) {
    res.render("abstracto_espatula");
  },
  abstracto_pincel: function (req, res) {
    res.render("abstracto_pincel");
  },
  fotomontaje: function (req, res) {
    res.render("fotomontaje");
  },
  pouring: function (req, res) {
    res.render("pouring");
  },*/
};

module.exports = productosController;
