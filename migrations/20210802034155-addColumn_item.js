'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('items', 'image', {
          type: Sequelize.STRING
      }, {  })

      await queryInterface.addColumn('items', 'address', {
          type: Sequelize.STRING,
      }, {  })

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('items','image')
    await queryInterface.removeColumn('items','address')
  }
};
