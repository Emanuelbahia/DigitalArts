const db = require("../database/models");

//middleware de aplicacion para mostrar una navbar cuando estoy logueado y otra cuando no!

function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;

  //cookie, para loguear de manera automatica al usuario//
  let emailInCookie = req.cookies.userEmail;
  // let bodyEmail = req.body.email;
  // console.log(bodyEmail);
  // console.log(emailInCookie);

  /* let userFromCookie = db.Users.findOne({
    where: { email:  },
  }).then((email) => {
    return email;
  });
  console.log(userFromCookie);
  if (userFromCookie) {
    req.session.userLogged = userFromCookie;
  } */
  if (req.session && req.session.userLogged) {
    res.locals.isLogged = true;
    //lo q tengo en session lo paso a una variable local para q en el navbar con ejs pueda poner el nombre y la foto del usuario
    res.locals.userLogged = req.session.userLogged;
    //console.log(res.locals.userLogged);
  }
  next();
}

module.exports = userLoggedMiddleware;
