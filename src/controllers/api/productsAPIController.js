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

  lastProduct: (req, res) => {
    db.Products.findOne({
      order: [["id", "DESC"]],
    }).then((last) => {
      let lastProd = {
        meta: {
          status: 200,
          total: last.length,
          url: "api/products/last",
        },
        data: last,
      };
      res.json(lastProd);
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
