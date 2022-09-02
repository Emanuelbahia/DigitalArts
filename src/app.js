// ************ Require's ************
const express = require("express");
const path = require("path");
const port = 3001;
const methodOverride = require("method-override");
const session = require("express-session");
const cookies = require("cookie-parser");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");


// ************ express() - (don't touch) ************
const app = express();


// ************ Middlewares - (don't touch) ************
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "../../public"));
app.use(
  session({ secret: "secreto", resave: false, saveUninitialized: false })
);
app.use(cookies());
app.use(userLoggedMiddleware); //middleware de aplicacion porq el navbar esta en todas las vistas, va dsps de la session
app.use(express.urlencoded({ extended: false }));// Recibo la informacion q viaja a traves de un formulario via POST en req.body 

// ************ Template Engine - (don't touch) ************
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// ************ Route System require and use() ************
const mainRutas = require("./routes/main");//Main
const carritoRutas = require("./routes/cart");//Carrito
const userRutas = require("./routes/users");//Usuarios
const productsRutas = require("./routes/products");//Productos
const apiProductsRouter = require('./routes/api/productsApi');//Api de products
const apiUsersRouter = require('./routes/api/usersApi');//Api de users

//RUTAS 
app.use("/", mainRutas); //home
app.use("/carrito", carritoRutas); //carrito 
app.use("/products", productsRutas); //productos
app.use("/users", userRutas); //users
app.use("/api/products",apiProductsRouter);//Api de productos
app.use("/api/users",apiUsersRouter);//Api de usuarios

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
//A través del método listen levantamos el servidor
app.listen(port, () => {
  console.log("hola mundo");
});
