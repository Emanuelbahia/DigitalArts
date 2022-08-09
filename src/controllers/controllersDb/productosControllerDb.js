const db = require("../../database/models");

const productosControllerDb = {
  //traigo todas los productos
  index: (req, res) => {
    db.Products.findAll().then((products) => res.send(products));
  },

  /* crear producto */
  //Primero creo el formulario para que sea completado
  formCreate: async function (req, res) {
    //traigo todas las categorias, descripciones y materiales y las guardo en variables

    let cat = await db.Categories.findAll();
    let desc = await db.Descriptions.findAll();
    let mat = await db.Materials.findAll();

    Promise.all([cat, desc, mat]).then(function ([cate, descrip, mate]) {
      res.render("formCreate", { cate, descrip, mate });
    });
  },

  //Recibo del usuario los parametros ( name, img, size, price, descripcion, material, categoria)

  create: async function (req, res) {
    //Se utiliza create para crear y viaja por post
    await db.Products.create({
      name: req.body.name,
      image: req.file.filename,
      size: req.body.size,
      price: req.body.price,
      description_id: req.body.description,
      material_id: req.body.material,
      category_id: req.body.category,
    });
    //redirecciono el producto
    return res.redirect("/");
  },

  //listado de categoria de cuadros
  cuadros: async function (req, res) {
    // return res.send(req.params.category);
    let categoria = await db.Categories.findOne({
      where: { category: req.params.category },
    });
    db.Products.findAll({
      where: { category_id: categoria.id },

      include: [
        { association: "category" },
        { association: "material" },
        { association: "description" },
      ],
    }).then(function (categoryProducts) {
      res.render("products", {
        categoryProducts: categoryProducts,
      });
    });
  },

  /* detalle del producto */
  detail: function (req, res) {
    //Traigo de db el producto a detallar, con las asociaciones que se hicieron en los modelos
    db.Products.findByPk(req.params.id, {
      include: [
        { association: "description" },
        { association: "material" },
        { association: "category" },
      ],
    }).then(function (detailProduct) {
      return res.render("detail", { detailProduct });
    });
  },
  /*Edicion del producto*/
  formEdit: async (req, res) => {
    //id del producto a editar
    let cuadrosEditar = await db.Products.findByPk(req.params.id, {
      include: [
        { association: "description" },
        { association: "material" },
        { association: "category" },
      ],
    });

    //traigo todas las categorias, descripciones y materiales y las guardo en variables
    let cat = await db.Categories.findAll();
    let desc = await db.Descriptions.findAll();
    let mat = await db.Materials.findAll();

    //  let cuadrosEditar = cuadros.find((cuadro) => cuadro.id == id);
    //  res.render("formEdit", { cuadrosEditar });

    Promise.all([cuadrosEditar, cat, desc, mat]).then(function ([
      cuadrosEditar,
      cate,
      descrip,
      mate,
    ]) {
      res.render("formEdit", { cuadrosEditar, cate, descrip, mate });
    });
  },
  //Se edita el producto con los datos provenientes del formulario
  edit: (req, res) => {
    //Se utiliza update para editar
    db.Products.update(
      {
        name: req.body.name,
        size: req.body.size,
        price: req.body.price,
        description_id: req.body.description,
        material_id: req.body.material,
        category_id: req.body.category,
      },

      {
        where: { id: req.params.id }, //Se requiere el id que se quiere editar
      }
    );

    return res.redirect("/productsDb/detail/" + req.params.id);
  },

  /* eliminar producto */
  delete: function (req, res) {
    //Para eliminar se utiliza el metodo destroy """"NO TE OLVIDES DEL WHERE"""""
    db.Products.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.redirect("/");
  },
};

module.exports = productosControllerDb;
