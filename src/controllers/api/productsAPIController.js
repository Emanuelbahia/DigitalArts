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

  product: (req, res) => {
    db.Products.findByPk(req.params.id).then((q) => {
      let qId = {
        meta: {
          status: 200,
          total: q.length,
          url: "api/products/:id",
        },
        data: q,
      };
      res.json(qId);
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

  //me trae la cantidad de productos q tiene cada uno
  quantity: (req, res) => {
    db.Products.findByPk(req.params.id).then((q) => {
      let qId = {
        meta: {
          status: 200,
          total: q.length,
          url: "api/products/quantity/:id",
        },
        data: q.quantity,
      };
      res.json(qId);
    });
  },

  category: (req, res) => {
    db.Categories.findAll({
      order: [["id", "ASC"]],
    }).then((categories) => {
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
