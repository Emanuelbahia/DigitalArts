function guestMiddleware(req, res, next) {
  //pregunto si tengo a alguien en session
  if (req.session.userLogged) {
    return res.redirect("/"); //si hay alguien lo mando al home
  }
  //si no hay nadie dejo q vaya al formulario de register y login
  next();
}

module.exports = guestMiddleware;
