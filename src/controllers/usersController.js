const { validationResult }= require('express-validator');

const usersController = {  
    register: function (req, res) {
        res.render("register");
  },
    processRegister: function (req, res)  {
     const resultValidation =  validationResult(req);

     if (resultValidation.errors.length > 0) {
      return res.render ('register', { 
        errors: resultValidation.mapped(),
      });
     }  
   
     },
    registro_de_artistas: function (req, res) {
        res.render("registro_de_artistas");
  }
};

module.exports = usersController;