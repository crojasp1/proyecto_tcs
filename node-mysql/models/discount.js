'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Discount.hasOne(models.Payment, {
        foreignKey: 'idPayment'
      })
    }
  }
  Discount.init({
    idDiscount: DataTypes.INTEGER,
    percent: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Discount',
    timestamps: false
  });
  return Discount;
};