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

  processRegister: async function (req, res) {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    await db.Users.create({
      firstName: req.body.name,
      lastName: req.body.surname,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
      esAdmin: 0, //por defecto lo pongo igual a 0 par q no sea administrador
      image: req.file.filename,
    });

    return res.redirect("/");
  },

  login: function (req, res) {
    return res.render("login");
  },

  loginProcess: async (req, res) => {
    //el mail q viene por el body lo busco en la base de datos
    let bodyEmail = req.body.email;
    let userToLogin = await db.Users.findOne({
      where: { email: bodyEmail },
    }).then((email) => {
      return email.email;
    });
    // si el mail esta, sigo con el proceso comparando la contraseña q pone con la q esta en la base de datos
    if (userToLogin) {
      //busco al usario a traves de su email, y de ahi obtengo su contraseña
      let userPassword = await db.Users.findOne({
        where: { email: bodyEmail },
      }).then((email) => {
        return email.password;
      });
      let isOkThePassword = bcryptjs.compareSync(
        //comparo las contraseñas de cuando se registro y la de login del usuario
        req.body.password,
        userPassword
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
       },

  profile: (req, res) => {
    return res.render("profile", {
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
