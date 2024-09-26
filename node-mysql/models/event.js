"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.belongsToMany(models.client, {
        through: "event_has_client",
        foreignKey: "idEvent",
      });
      // Event tiene muchos pagos
      Event.hasMany(models.Payment, {
        foreignKey: "idEvent",
      });
    }
  }
  Event.init(
    {
      idEvent: DataTypes.INTEGER,
      title: DataTypes.STRING,
      price: DataTypes.INTEGER,
      place: DataTypes.STRING,
      capacity: DataTypes.INTEGER,
      date: DataTypes.DATE,
      description: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      buyers_capacity: DataTypes.INTEGER,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Event",
      timestamps: false,
    }
  );
  return Event;
};
