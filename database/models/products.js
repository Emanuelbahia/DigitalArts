module.exports = (sequelize, dataTypes) => {
  let alias = "Product"; //va en singular

  let cols = {
    id: {
      type: dataTypes.BIGINT(10).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    name: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },

    image: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },

    size: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    price: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },

    material_id: dataTypes.BIGINT(10),

    description_id: dataTypes.BIGINT(10),

    category_id: dataTypes.BIGINT(10),

    vendido_id: dataTypes.BIGINT(10),
  };

  let config = {
    tableName: "products",
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);
};
