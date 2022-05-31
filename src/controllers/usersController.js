const path = require("path");

const usersController = {  
    register: function (req, res) {
        res.render("register");
  },
    registro_de_artistas: function (req, res) {
        res.render("registro_de_artistas");
  }
};

module.exports = usersController;