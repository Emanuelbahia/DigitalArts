module.exports = (sequelize, dataTypes) => {
  let alias = "Materials";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    material: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  };
  let config = {
    tableName: "material_products",
    timestamps: false,
  };

  const Material = sequelize.define(alias, cols, config);

  return Material;
};
