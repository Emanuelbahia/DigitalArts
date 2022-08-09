module.exports = (sequelize, dataTypes) => {
  let alias = "Products"; //se suele poner el nombre del modelo en plural, Asi sequalize va a llamar a la tabla
  //detallo las columnas de la tabla product. Definimos el modelo
  let cols = {
    id: {
      type: dataTypes.INTEGER, //tipo de dato (datatype)
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
    tableName: "products", // nombre de la tabla en nuestra BD
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    // relacion producto usuarios muchos a muchos
    Product.belongsToMany(models.Users, {
        as: "users",
        through: "pedidos",
        foreignKey: "product_id",
        otherKey: "user_id",
        timestamps: false
    }),
    //relacion producto material uno a muchos
    Product.belongsTo(models.Materials, {
    as: "material",
    foreignKey: "material_id"
    }),
     //relacion producto description uno a muchos
    Product.belongsTo(models.Descriptions, {
    as: "description",
    foreignKey: "description_id"
    }),
     //relacion producto category uno a muchos
    Product.belongsTo(models.Categories, {
    as: "category",
    foreignKey: "category_id"
    })
   }

  return Product;
};
