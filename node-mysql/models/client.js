'use strict';
 const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  Client.init({
    idClient: DataTypes.INTEGER,
    name: DataTypes.STRING,
    idEvent: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    gender: DataTypes.ENUM("F","M","ND"),
    email: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    category: DataTypes.ENUM("C","V")
  }, 
  {
    sequelize,
    modelName: 'Client',
    updateddAt: false,
    cretedAt: 'createdTimestamp'
  });
  return Client;
};