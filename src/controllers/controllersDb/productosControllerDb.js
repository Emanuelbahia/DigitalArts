//const db = require("../../../database/models")


const productosControllerDb = {
  
      /* crear producto */
  formCreate: function (req, res) {
     db.Categories.findAll()
         .then(function(categories){
            return res.render("formCreate", {categories:categories})
         });
     db.Descriptions.findAll()
         .then(function(descriptions){
            return res.render("formCreate", {descriptions:descriptions})
         });    
     db.Materials.findAll()
         .then(function(materials){
            return res.render("formCreate", {materials:materials})
         });    
  },
 
  create: function (req, res) {
   
     db.Products.create ({
        name: req.body.name,
        image:req.file.filename,
        size: req.body.size,
        price: req.body.price,
        description_id: req.body.description,
        material_id: req.body.material,
        category_id:req.body.category
     })
       return res.redirect("/");
  },
  /* detalle del producto */
 detail: function (req, res) {
   
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
     
     .catch(function(e){//ver error
         
     }) 
},

  edit: (req, res) => {
    
    db.Products.update ({
        name: req.body.name,
        image: req.file.filename,
        size: req.body.size,
        price: req.body.price,
        description_id: req.body.description,
        material_id: req.body.material,
        category_id:req.body.category
     }, {
        where: {
            id: req.params.id
        }
     });
     return res.redirect(`/products/detail/${req.body.id}`);
  
  },

  /* eliminar producto */
  delete: function (req, res) {
    
    db.Products.destroy({
        where: {
            id: req.params.id
        }
    })

    return res.redirect("/");
  },
};

module.exports = productosControllerDb;
