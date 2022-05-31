
const productosController= { 
  cuadros_decorativos: function (req, res) {
      res.render("cuadros_decorativos");
   },
  cuadros_artistas_nuevos: function (req, res) {
    res.render("cuadros_artistas_nuevos");
 },
  
  abstracto_espatula: function (req, res) {
    res.render("abstracto_espatula");
 },
  abstracto_pincel: function (req, res) {
    res.render("abstracto_pincel");
 },
  fotomontaje: function (req, res) {
    res.render("fotomontaje");
 },
  pouring: function (req, res) {
    res.render("pouring");
 },

}

module.exports = productosController;