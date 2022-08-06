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
      res.render("formCreate", { cate, descrip, mate});
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
      category_id: req.body.category
    });
//redirecciono el producto
    return res.redirect("/");
  },

//listado de categoria de cuadros
    cuadros: async function (req, res) {
      await db.Products.findAll({include:[{association: "category"}]})
      .then(function (categoryProducts) {
        res.render("products", { categoryProducts: categoryProducts });
      });
       },

  /* detalle del producto */
  detail: async function (req, res) {
    //Traigo de db el producto a detallar, con las asociaciones que se hicieron en los modelos
   await db.Products.findByPk(req.params.id, {
      include: [
        { association: "description"},
        { association: "material"},
      ],
    }).then(function (detailProduct) {
      return res.render("detail", { detailProduct});
    });
  },
  /* editar producto */
<<<<<<< HEAD
  formEdit: (req, res) => {
    //tengo 4 pedidos asincronicos, y por eso los defino por separado
    let productUpdate = db.Products.findByPk(req.params.id);
    let productCategory = db.Categories.findAll();
    let productDescription = db.Descriptions.findAll();
    let productMaterial = db.Materials.findAll();

    Promise.all([
      productUpdate,
      productCategory,
      productDescription,
      productMaterial,
      //el then se ejecuta cuando se cumplan las 4 promesas
    ]).then(function ([products, category, description, material]) {
      res.render("formEdit", {
        products: products,
        category: category,
        description: description,
        material: material,
      });
    });
  },
  //Se edita el producto con los datos provenientes del formulario
  edit: (req, res) => {
    //Se utiliza update para editar
    db.Products.update(
      {
        name: req.body.name,
        image: req.file.filename,
=======
  formEdit:  async (req, res) => {
   //id del producto a editar
    let cuadrosEditar =  await db.Products.findByPk(req.params.id);
   
    //traigo todas las categorias, descripciones y materiales y las guardo en variables

   let cat = await db.Categories.findAll();
   let desc = await db.Descriptions.findAll();
   let mat = await db.Materials.findAll();
  
  //  let cuadrosEditar = cuadros.find((cuadro) => cuadro.id == id);
  //  res.render("formEdit", { cuadrosEditar });
    
    Promise.all([cuadrosEditar,cat,desc,mat])
      .then(function ([cuadrosEditar, cate, descrip, mate]) {
      res.render("formEdit", { cuadrosEditar, cate, descrip, mate}) }
    );
   },
  //Se edita el producto con los datos provenientes del formulario
  edit: (req, res) => {

   //Se utiliza update para editar 
    db.Products.update ({
        name: req.body.name,
      //  image: req.file.filename,
>>>>>>> ef27131f9ec59b233c3eeb52f095921912e9424f
        size: req.body.size,
        price: req.body.price,
        description_id: req.body.description,
        material_id: req.body.material,
<<<<<<< HEAD
        category_id: req.body.category,
      },

      {
        where: { id: req.params.id }, //Se requiere el id que se quiere editar
      }
    );

    return res.redirect(`/products/detail/${req.body.id}`);
  },

  //listado de categoria de cuadros
  cuadros: function (req, res) {
    /* db.Products.findAll([
      {
        include: [
          { association: "description" },
          { association: "material" },
          { association: "category" },
        ],
      },
    ]) */
    /*  let prod = db.Products.findAll();
    let cat = db.Categories.findAll();
    let desc = db.Descriptions.findAll();
    let mat = db.Materials.findAll();

    Promise.all([prod, cat, desc, mat]).then(function ([
      productos,
      categorias,
      descripciones,
      materiales,
    ]) {
      let category = req.params.category;
      let categoryProducts = prod.filter((cate) => {
        return cate.category_id == category;
      });
      res.render("products", {
        categoryProducts,
        productos: productos,
        categorias: categorias,
        descripciones: descripciones,
        materiales: materiales,
      });
    }); */
  },

=======
        category_id:req.body.category
   }, { 
    
    where: {
            id: req.params.id   //Se requiere el id que se quiere editar
        },
    }); 
      res.redirect(`/productsDb/detail/${req.body.id}`);
   },
 
  
>>>>>>> ef27131f9ec59b233c3eeb52f095921912e9424f
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
