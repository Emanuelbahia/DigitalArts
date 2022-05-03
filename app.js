const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(__dirname + "/public"));

const views = path.join(__dirname, "views/");

app.get("/", function (req, res) {
  res.sendFile(path.join(views, "index.html"));
});

app.listen(port, () => {
  console.log("hola mundo");
});
