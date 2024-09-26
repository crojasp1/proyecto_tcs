'use strict';
 const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Definir la relación con el modelo Client
      car.hasOne(models.Client, {
        foreignKey: 'idClient', // La clave foránea en la tabla Client
        as: 'Client' // Alias para acceder a esta relación
      });
    }
  }
  car.init({
    plate: DataTypes.STRING,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    version: DataTypes.INTEGER,
    kilometers: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    idClient: DataTypes.INTEGER
  }, 
  {
    sequelize,
    modelName: 'car',
    timestamps: false
  });
  return car;
};