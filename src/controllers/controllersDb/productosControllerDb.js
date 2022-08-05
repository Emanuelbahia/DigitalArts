const db = require("../../database/models")


const productosControllerDb = {
   //traigo todas los productos
   index: (req, res) => {
      db.Products.findAll().then((products) => res.send(products));
    },
  
      /* crear producto */
   //Primero creo el formulario para que sea completado
  formCreate: function (req, res) {
   //traigo todas las categorias
    
   //traigo todas las descripciones
     
   //traigo todos los materiales 
    let cat = db.Categories.findAll();
    let desc = db.Descriptions.findAll();
    let mat = db.Materials.findAll();

    
    Promise.all([cat, desc, mat])
      .then(function([cat, desc, mat]){
         
         res.render("formCreate", {cat: cat, descrip: descrip, mate: mate });
      });
      },
     

 //Recibo del usuario los parametros ( name, img, size, price, descripcion, material, categoria)
  create: function (req, res) {
   //Se utiliza create para crear y viaja por post
    let newProduct = {
      name: req.body.name,
      image:req.file.filename,
      size: req.body.size,
      price: req.body.price,
      description_id: req.body.description,
      material_id: req.body.material,
      category_id:req.body.category
    } 
   db.Products.create ({newProduct})
       return res.redirect("/");
  },
  /* detalle del producto */
 detail: function (req, res) {
   //Traigo de db el producto a detallar, con las asociaciones que se hicieron en los modelos ( ver moelos)
    db.Products.findByPk(req.params.id, {
        include: [{association:"description"}, {association:"material"}, {association:"category"}]
    })
        .then(function(detailProduct){
        return res.render("detail", { detailProduct:detailProduct });
  })

   },
  /* editar producto */
  formEdit: (req, res) => {
    let productUpdate = db.Products.findByPk(req.params.id)
    
    let productCategory = db.Categories.findAll();
 
    let productDescription = db.Descriptions.findAll();
 
    let productMaterial = db.Materials.findAll();
 
    Promise.all([productUpdate, productCategory, productDescription, productMaterial])
      .then(function([cuadrosEditar, category, description, material]){
         
         res.render("formEdit", {cuadrosEditar: cuadrosEditar, category:category, description:description, material:material })
      })
     

},
   //Se edita el producto con los datos provenientes del formulario
  edit: (req, res) => {
   //Se utiliza update para editar 
    db.Products.update ({
      name: req.body.name,
        image: req.file.filename,
        size: req.body.size,
        price: req.body.price,
        description_id: req.body.description,
        material_id: req.body.material,
        category_id:req.body.category
   })
    }, 
      
        where: {
            id: req.params.id   //Se requiere el id que se quiere editar
        },
    }  
     return res.redirect(`/products/detail/${req.body.id}`);
  
  },

  /* eliminar producto */
  delete: function (req, res) {
   //Para eliminar se utiliza el metodo destroy """"NO TE OLVIDES DEL WHERE""""" 
    db.Products.destroy({
        where: {
            id: req.params.id
        }
    })

    return res.redirect("/");
  },
};

module.exports = productosControllerDb;
