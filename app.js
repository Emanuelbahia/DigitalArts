const express = require("express");
const app = express();

console.log(app);

app.listen(3000, () => console.log("hola mundo"));

app.get("/", function (req, res) {
  res.send("bienvenido a contacto");
});
