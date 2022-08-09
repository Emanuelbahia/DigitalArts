const path = require("path");
const fs = require("fs");
const bcryptjs = require("bcryptjs");
const { text } = require("express");
const express = require("express");
const { validationResult } = require("express-validator");
const db = require("../../database/models");
const res = require("express/lib/response");

const usersControllerDb = {
  register: function (req, res) {
    return res.render("register");
  },

  processRegister: function (req, res) {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    db.Users.create({
      firstName: req.body.name,
      lastName: req.body.surname,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
      esAdmin: 0, //por defecto lo pongo igual a 0 par q no sea administrador
      image: req.file.filename,
    });

    return res.redirect("/");
  },

  findByEmail: function (email, text) {
    let allUsers = db.Users.findAll().then((all) => {
      let userFound = allUsers.find((oneUser) => oneUser[email] === text);

      return userFound;
    });
  },

  login: function (req, res) {
    return res.render("login");
  },

  loginProcess: (req, res) => {
    //comparo el email q esta en la BD con el email q viene por el req.body
    let userToLogin = usersControllerDb.findByEmail("email", req.body.email);
    if (userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(
        //comparo las contraseñas de cuando se registro y la de login del usuario
        req.body.password,
        userToLogin.password
      );
      if (isOkThePassword) {
        req.session.userLogged = userToLogin;

        //seteo la cookie//
        if (req.body.remember_user) {
          res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 5 });
        }

        return res.redirect("/usersDb/users"); // si esta todo bien lo redirijo a la vista de su perfil de usuario
      }
      return res.render("login", {
        //si las contraseñas no concuerdan lo mando a login
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

  profile: (req, res) => {
    return res.render("users", {
      user: req.session.userLogged,
    });
  },

  logout: (req, res) => {
    res.clearCookie("userEmail"); //destruyo la cookie
    req.session.destroy(); //borra todo lo q esta en session
    return res.redirect("/"); //dsps redirijo a la home
  },
};

module.exports = usersControllerDb;
