'use strict';
 const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Asociacion muchos a muchos con Event
      client.belongsToMany(models.Event, {
        through: 'event_has_client',
        foreignKey: 'idClient',
        otherKey: 'idEvent'
      });
      //Asociacion cliente tiene muchos autos
      client.hasMany(models.car, {
        foreignKey: 'idClient'
      });
      client.hasMany(models.Payment, {
        foreignKey: 'idClient'
      });
    }
  }
  client.init({
    idClient: {
      type: DataTypes.INTEGER,
      primaryKey: true,  // Definir idClient como clave primaria
    },
    name: DataTypes.STRING,
    idEvent: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    gender: DataTypes.ENUM("F","M","ND"),
    email: DataTypes.STRING,
    created_at: DataTypes.DATE,
    category: DataTypes.ENUM("C","V")
  }, 
  {
    sequelize,
    modelName: 'client',
    timestamps: false
  });
  return client;
};