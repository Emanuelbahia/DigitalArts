const path = require("path");
const fs = require("fs");

const cuadrosFilePath = path.join(__dirname, "../data/products.json");
const cuadros = JSON.parse(fs.readFileSync(cuadrosFilePath, "utf-8"));

const cartController = {
  carrito: function (req, res) {
    let id = req.params.id; //guardo el id en la variable unCuadro

    let compraCuadro = cuadros.filter((cuadro) => {
      return cuadro.id == id;
    });

    return res.render("carrito", { compraCuadro });
  },
};

module.exports = cartController;
