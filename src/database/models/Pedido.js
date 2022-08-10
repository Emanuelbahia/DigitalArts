module.exports = (sequelize, dataTypes) => {  //tabla pivot entre usuarios y productos
  let alias = "Pedidos";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    product_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };
  let config = {
    tableName: "pedidos",
    timestamps: false,
  };

  const Pedido = sequelize.define(alias, cols, config);
  


   return Pedido;
};
