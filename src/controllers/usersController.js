const path = require("path");
const fs = require("fs");
const bcryptjs = require("bcryptjs");
const { text } = require("express");
const express = require("express");
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

  findByEmail: function (email, text) {
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    let userFound = users.find((oneUser) => oneUser[email] === text);
    return userFound;
  },

  processRegister: function (req, res) {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    //validacion por email//

    let userDb = usersController.findByEmail("email", req.body.email); //busca si el mail ya esta en la BD
    if (userDb) {
      return res.render("register", {
        //si el mail ya esta registrado te redirije a register, sino vas a login
        errors: {
          email: { msg: "Este email ya esta registrado" },
        },
        oldData: req.body,
      });
    }

    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

    let newUser = {
      id: usersController.generatedId(), //no me deja llamar a la funcion generatedId(), me da error
      firstName: req.body.name,
      lastName: req.body.surname,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
      image: req.file.filename,
    };
    users.push(newUser);

    let newUserSave = JSON.stringify(users, null, 2);
    fs.writeFileSync(usersFilePath, newUserSave, "utf-8");

    return res.redirect("/login");
  },

  findByPK: function (id) {
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    let userFound = users.find((oneUser) => oneUser.id == id);
    return userFound;
  },

  delete: function (id) {
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    let finalUsers = users.filter((oneUser) => oneUser.id !== id);
    let deleteUser = JSON.stringify(finalUsers, null, 2);
    fs.writeFileSync(usersFilePath, deleteUser, "utf-8");
  },

  login: function (req, res) {
    return res.render("login");
  },
  /***terminar****/ /*
  loginProcess: function (req, res) {
    const errors = validationResult(req);
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    if (errors.isEmpty()) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.body.email) {
          if (bcryptjs.compareSync(req.body.password, users[i].password)) {
            
            let usuarioLog = users[i];
            return usuarioLog;
            break;
          }
        }
      }
      if (usuarioLog == undefined) {
        return res.render("login", {
          errors: {
            email: { msg: "Credenciales invalidas" },
          },
        });
      }
      req.session.usuarioLogueado = usuarioLog; /***empezar cookie 
      res.redirect("index");
    } else {
      return res.render("login", { errors: errors.errors });
    }
  },*/
  loginProcess: (req, res) => {
    //comparo el email q esta en la BD con el email q viene por el req.body
    let userToLogin = usersController.findByEmail("email", req.body.email);
    if (userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(
        //comparo las contraseñas de cuando se registro y la de login del usuario
        req.body.password,
        userToLogin.password
      );
      if (isOkThePassword) {
        req.session.userLogged = userToLogin;
        return res.redirect("/"); // si esta todo bien lo redirijo al home
      }
      return res.render("login", {
        //si las contraseñas no concuerdan redirijo a login
        errors: {
          email: { msg: " las credenciales son invalidas" },
        },
      });
    }
    return res.render("login", {
      //si no se encuentra el mail en la BD lo mando a login
      errors: {
        email: { msg: "no se encuentra el email en la base de datos" },
      },
    });
  },
};

module.exports = usersController;
