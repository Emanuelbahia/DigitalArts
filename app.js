const express = require("express");
const app = express();
const path = require("path");
const { ppid } = require("process");
const port = 3000;
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.static(__dirname + "/public"));

const views = path.join(__dirname, "src/views/");
const mainRutas = require("./src/routes/main");
const carritoRutas = require("./src/routes/carrito");
const usersRutas = require("./src/routes/users");
const productosRutas = require("./src/routes/productos");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

/* RUTAS NUEVAS */
app.use("/", mainRutas); /*home */
app.use("/carrito", carritoRutas); /*carrito */
app.use("/", usersRutas); /* users*/
app.use("/", productosRutas); /*cuadros decorativos*/

// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log("hola mundo");
});
