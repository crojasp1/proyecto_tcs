'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      method: {
        type: Sequelize.ENUM("Efectivo","Debito","Credito","Nequi"),
        allowNull: false,
      
      },
      iva: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 19
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }
  );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Payments');
  }
};