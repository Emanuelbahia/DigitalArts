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
    //relacion categoria producto muchos  a uno
 // Category.associate = function(models){
 //   Category.hasMany(models.Products, {
  //    as: "products",
  //    foreingKey: "category_id"
  //   })
  //  
 // }

  return Category;
};
