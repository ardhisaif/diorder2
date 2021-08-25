'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ShopingLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itemId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'items',
          key: 'id'
        },
        onUpdate:'CASCADE',
        onDelete: 'CASCADE'
      
      },
      customerId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'customers',
          key: 'id'
        },
        onUpdate:'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ShopingLists');
  }
};