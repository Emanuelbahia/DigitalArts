function guestMiddleware(req, res, next) {
  //pregunto si tengo a alguien en session
  if (req.session.userLogged) {
    return res.redirect("/users"); //si hay alguien lo mando a su perfil, si no hay nadie, q siga el proceso de registro
  }
  //si no hay nadie dejo q vaya al formulario de register y login
  next();
}

module.exports = guestMiddleware;
