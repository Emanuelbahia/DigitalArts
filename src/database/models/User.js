module.exports = (sequelize, dataTypes) => {
  let alias = "Users"; //idem comentarios en Product.js
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    firstName: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: dataTypes.INTEGER,
    },
  };

  let config = {
    tableName: "users",
    timestamps: false,
  };

  const User = sequelize.define(alias, cols, config);

  //Relacion user con Products -muchos a muchos
  User.associate = function (models) {
    User.belongsToMany(models.Products, {
      as: "manyproducts",
      through: "pedidos",
      foreignKey: "user_id",
      otherKey: "product_id",
      timestamps: false,
    });
  };
  return User;
};
