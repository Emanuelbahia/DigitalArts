const db = require("../database/models");

//middleware de aplicacion para mostrar una navbar cuando estoy logueado y otra cuando no!

function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;

  //cookie, para loguear de manera automatica al usuario//
  let emailInCookie = req.cookies.userEmail;
 
  if (req.session && req.session.userLogged) {
    res.locals.isLogged = true;
    //lo q tengo en session lo paso a una variable local para q en el navbar con ejs pueda poner el nombre y la foto del usuario
    res.locals.userLogged = req.session.userLogged;
   
  }
  next();
}

module.exports = userLoggedMiddleware;
