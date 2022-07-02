const path = require("path");
const fs = require("fs");
const bcryptjs = require("bcryptjs");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const { validationResult } = require("express-validator");

const usersController = {
  register: function (req, res) {
    return res.render("register");
  },

  //genero un id para crear un usuario (si hay un usuario es id +1, sino arranca de 1)

  generatedId: function () {
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

    let lastUser = users.pop();

    if (lastUser) {
      return lastUser.id + 1;
    }
    return 1;
  },

  processRegister: function (req, res) {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("register", {
        // al poner renderizar  crashea arreglar//
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    let userDB = User.findByfield("email", req.body.email);

    if (userDB) {
      return res.render("register", {
        errors: { msg: "Email ya registrado" },
        oldData: req.body,
      });
    }

    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

    let newUser = {
      id: this.generatedId,
      firstName: req.body.name,
      lastName: req.body.surname,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
      image: req.file.filename,
    };
    users.push(newUser);

    let newUserSave = JSON.stringify(users, null, 2);
    fs.writeFileSync(usersFilePath, newUserSave, "utf-8");

    let userCreate = {
      ...req.body,
      image: req.file.filename,
    };

    User.create(userCreate);

    return res.send("no tienes errores");

    return res.redirect("/login");
  },

  login: function (req, res) {
    return res.render("login");
  },

  loginProcess: function (req, res) {
    //   let userLog = users.finByField('email, req.body.email')
    return res.render("login");
  },
};

module.exports = usersController;
