const express = require("express");
const app = express();
const path = require("path");
const { ppid } = require("process");
const port = 3001;
const methodOverride = require("method-override");
const session = require("express-session");
const cookies = require("cookie-parser");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");

app.use(methodOverride("_method"));
app.use(express.static(__dirname + "../../public"));

app.use(
  session({ secret: "secreto", resave: false, saveUninitialized: false })
);
app.use(cookies());

app.use(userLoggedMiddleware); //middleware de aplicacion porq el navbar esta en todas las vistas, va dsps de la session

const views = path.join(__dirname, "views/");
const mainRutas = require("./routes/main");
const carritoRutas = require("./routes/cart");
const userRutasDb = require("./routes/routesDb/usersdb");
const productosRutasDb = require("./routes/routesDb/productosdb");
//llamo a la ruta de las api de products
const apiProductsRouter = require('./routes/api/productsApi')
//llamo a la ruta de las api de users
const apiUsersRouter = require('./routes/api/usersApi')

/* Recibo la informacion q viaja a traves de un formulario via POST en req.body */
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* RUTAS NUEVAS */
app.use("/", mainRutas); /*home */
app.use("/carrito", carritoRutas); /*carrito */
app.use("/productsDb", productosRutasDb); /*productosDb*/
app.use("/usersDb", userRutasDb); /* usersDb*/

//Creo la colección de mis recursos de Products y users (APIs)
app.use("/api/products",apiProductsRouter);
app.use("/api/users",apiUsersRouter);

// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => {
  console.log("hola mundo");
});
