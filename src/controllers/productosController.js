/* const path = require("path");
const fs = require("fs");

const cuadrosFilePath = path.join(__dirname, "../data/products.json");
const cuadros = JSON.parse(fs.readFileSync(cuadrosFilePath, "utf-8"));

const productosController = {
  /* categoria de cuadros */
/* cuadros: function (req, res) {
 /*   const cuadros = JSON.parse(fs.readFileSync(cuadrosFilePath, "utf-8"));
    let category = req.params.category;

    let categoryProducts = cuadros.filter((cuadro) => {
      return cuadro.category == category;
    });
    res.render("products", { categoryProducts });
  },

  /* detalle del producto */
/* detail: function (req, res) {
    const cuadros = JSON.parse(fs.readFileSync(cuadrosFilePath, "utf-8"));
    let id = req.params.id;

    let detailProduct = cuadros.find((cuadro) => cuadro.id == id);

    return res.render("detail", { detailProduct });
  },

  /* crear producto */
/* formCreate: function (req, res) {
    return res.render("formCreate");
  },

  create: function (req, res) {
    const cuadros = JSON.parse(fs.readFileSync(cuadrosFilePath, "utf-8"));

    let newProduct = {
      id: cuadros[cuadros.length - 1].id + 1,
      category: req.body.category,
      name: req.body.name,
      image: req.file.filename,
      size: req.body.size,
      description: req.body.description,
      material: req.body.material,
      price: req.body.price,
    };
    cuadros.push(newProduct);

    let newProductSave = JSON.stringify(cuadros, null, 2);
    fs.writeFileSync(cuadrosFilePath, newProductSave, "utf-8");

    return res.redirect("/");
  },

  /* crear categoria de producto */
/* categoryCreate: (req, res) => {
/*    return res.render("createCategory");
  },
  createCat: (req, res) => {
    return res.redirect("/");
  },

   editar producto */
/* formEdit: (req, res) => {
    const cuadros = JSON.parse(fs.readFileSync(cuadrosFilePath, "utf-8"));
    const id = req.params.id;
    let cuadrosEditar = cuadros.find((cuadro) => cuadro.id == id);
    res.render("formEdit", { cuadrosEditar });
  },

  edit: (req, res) => {
    let cuadros = JSON.parse(fs.readFileSync(cuadrosFilePath, "utf-8"));

    req.body.id = req.params.id;
    let productUpdate = cuadros.map((cuadro) => {
      if (cuadro.id == req.body.id) {
        let newProduct = {
          id: cuadro.id,
          category: req.body.category,
          name: req.body.name,
          image: cuadro.image,
          size: cuadro.size,
          description: req.body.description,
          material: req.body.material,
          price: req.body.price,
        };
        if (req.file) {
          newProduct = req.file.filename;
        }
        return newProduct;
      }
      return cuadro;
    });

    let actualizarProduct = JSON.stringify(productUpdate, null, 2);
    fs.writeFileSync(cuadrosFilePath, actualizarProduct, "utf-8");
    return res.redirect(`/products/detail/${req.body.id}`);
  },

  /* eliminar producto */
/* delete: function (req, res) {
    const cuadros = JSON.parse(fs.readFileSync(cuadrosFilePath, "utf-8"));
    let id = req.params.id;

    let deleteProduct = cuadros.filter((cuadro) => {
      return cuadro.id != id;
    });

    let borrar = JSON.stringify(deleteProduct, null, 2);
    fs.writeFileSync(cuadrosFilePath, borrar, "utf-8");

    return res.redirect("/");
  },
};

module.exports = productosController; * */
