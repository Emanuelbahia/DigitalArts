const express = require("express");
const app = express();
const path = require("path");
const { ppid } = require("process");
const port = 3000;

app.use(express.static(__dirname + "/public"));

const views = path.join(__dirname, "views/");

app.get("/", function (req, res) {
  res.sendFile(path.join(views, "index.html"));
});

app.get("detalle_producto.html", function (req, res){
  res.sendFile(path.join(views, "detalle_producto.html"));
});

app.get("categoria.html", function (req, res){
  res.sendFile(path.join(views, "categoria.html"));
});

app.listen(port, () => {
  console.log("hola mundo");
});

