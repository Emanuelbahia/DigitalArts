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

  return Category;
};
