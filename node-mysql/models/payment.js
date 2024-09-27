'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Payment.belongsTo(models.client, {
        foreignKey: 'idClient'
      });
  
      // Payment pertenece a un evento
      Payment.belongsTo(models.Event, {
        foreignKey: 'idEvent'
      });

      //Relacion con Discount
      Payment.hasOne(models.Discount,{
        foreignKey: 'idDiscount'
      })
    }
  }
  Payment.init({
    status: DataTypes.BOOLEAN,
    date: DataTypes.DATE,
    method: DataTypes.ENUM("Efectivo","Debito","Credito","Nequi"),
    iva: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Payment',
    // I don't want createdAt
    updateddAt: false,
    // I want updatedAt to actually be called updateTimestamp
    cretedAt: 'createdTimestamp',
  });
  return Payment;
};