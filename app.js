const express = require("express");
const app = express();
const path = require("path");
const { ppid } = require("process");
const port = 3000;

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

app.listen(port, () => {
  console.log("hola mundo");
});
