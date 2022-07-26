module.exports = (Sequelize, dataTypes) => {
  let alias = "Descriptions";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    description: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  };
  let config = {
    tableName: "description_products",
    timestamps: false,
  };

  const Description = Sequelize.define(alias, cols, config);

  return Description;
};
