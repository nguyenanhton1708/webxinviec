"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recruit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recruit.belongsTo(models.User, { foreignKey: "companyId" });
    }
  }
  Recruit.init(
    {
      title: DataTypes.TEXT("long"),
      contentPostHTML: DataTypes.TEXT("long"),
      contentPostFINAL: DataTypes.TEXT("long"),
      companyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Recruit",
    }
  );
  return Recruit;
};
