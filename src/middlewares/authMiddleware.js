function authMiddleware(req, res, next) {
  if (!req.session.userLogged) {
    return res.redirect("/login"); //si no tengo a nadie en session, lo redirijo al login
  }
  //si tengo a alguien dejo q siga la peticion
  next();
}

module.exports = authMiddleware;
