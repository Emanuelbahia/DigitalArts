const cuadrosArtistasNuevos = [
  { id: 1,
    imagen: "images/artista nuevo 1.jpg.jpg",
    tecnica: "abstracto con espátula",
    artista: "Stephen King",
    dimensiones: "30x40",
    detalle: "Bastidor en lienzo"
  }




]

const productosController= { 
  cuadros_decorativos: function (req, res) {
      res.render("cuadros_decorativos");
   },
  cuadros_artistas_nuevos: function (req, res) {
    let plato = this.cuadrosArtistasNuevos.find(( cuadro ) => cuadro.id == req.params.cuadroId) ;
    console.log(cuadro);
    res.render('cuadro_artistas_nuevos', {cuadro : cuadro});
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