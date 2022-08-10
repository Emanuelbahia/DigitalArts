module.exports = (sequelize, dataTypes) => {
  let alias = "Categories";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    category: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  };
  let config = {
    tableName: "category_products",
    timestamps: false,
  };

  const Category = sequelize.define(alias, cols, config);
    //relacion categoria producto muchos  a uno ( una categoria tiene muchos productos)
  Category.associate = function(models){
   Category.hasMany(models.Products, {
     as: "products",
     foreignKey: "category_id"
  })
    
 }
  return Category;
};
