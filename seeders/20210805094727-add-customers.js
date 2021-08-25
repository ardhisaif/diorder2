'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('customers', [{
    name: 'andi',
    password: "qwerty",
    email:"asda@asd.asd",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'budi',
    password: "qwerty",
    email:"asdqwewq@asd.asd",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'ani',
    password: "qwerty",
    email:"ini@asd.asd",
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('customers', null, {});
  }
};
