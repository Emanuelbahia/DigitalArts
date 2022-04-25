<<<<<<< HEAD
let express = require("express");
let app = express()
let path = require("path")
=======
const express = require("express");
const app = express();

console.log(app);

app.listen(3000, () => console.log("hola mundo"));

app.get("/", function (req, res) {
  res.send("bienvenido a contacto");
});
>>>>>>> eba1968677f902c594e372f60b22db3b4eb9a416
