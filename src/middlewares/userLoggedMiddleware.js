const usersController = require ("../controllers/usersController")

//middleware de aplicacion para mostrar una navbar cuando estoy logueado y otra cuando no!

function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;
//cookie//

/*let emailInCookie = req.cookies.userEmail;
let userFromCookie = usersController.findByEmail('email', emailInCookie)

if(userFromCookie){
  req.session.userLogged = userFromCookie;
}*/
  if (req.session && req.session.userLogged) {
    res.locals.isLogged = true;
    //lo q tengo en session lo paso a una variable locals para q en el navbar con ejs pueda poner el nombre y la foto del usuario
    res.locals.userLogged = req.session.userLogged;
  }
  next();
}

module.exports = userLoggedMiddleware;
