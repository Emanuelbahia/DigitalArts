const db = require("../../database/models");

const productsAPIController = {
  list: (req, res) => {
    db.Products.findAll().then((product) => {
      let respuesta = {
        meta: {
          status: 200,
          total: product.length,
          url: "api/products",
        },
        data: product,
      };
      res.json(respuesta);
    });
  },

  category: (req, res) => {
    db.Categories.findAll().then((categories) => {
      let respuesta = {
        meta: {
          status: 200,
          total: categories.length,
          url: "api/products/category",
        },
        data: categories,
      };
      res.json(respuesta);
    });
  },
};

module.exports = productsAPIController;
