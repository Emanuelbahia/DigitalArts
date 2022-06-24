const { validationResult } = require("express-validator");
const path = require("path");

const mainController = {
  index: function (req, res) {
    res.render("index");
  },
  
};

module.exports = mainController;
