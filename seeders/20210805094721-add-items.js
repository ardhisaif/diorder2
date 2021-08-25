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
     await queryInterface.bulkInsert('items', [{
        name: 'Beras Rojo Lele 10kg kualitas super',
        spesification: `Beras putih super Rojo Lele
        Mutu terjamin!`,
        price:98000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/3/25/5a2fc4c0-f65d-4bd6-95c2-d3f47c8dfa56.jpg",
        address:"Depok"
      },
      {
        name: 'Gulaku 1kg Hijau Murah',
        spesification: `Gulaku 1kg Hijau Murah`,
        price:10000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/6/16/83dcbe6b-9baf-4927-9449-30ff3e559655.png",
        address:"bandung"
      },
      {
        name: 'Air Minum Dalam Kemasan Merek MOJO TRAS UK 19 L',
        spesification: `TRAS adalah air minum dalam kemasan 100% murni yang diambil dari sumber air pegunungan dan sudah bersertifikasi SNI, BPOM, HALAL, ISO 22000.`,
        price:16000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/7/5/303e8a42-30e1-4369-a88c-b5936a8cf3fb.jpg",
        address:"bandung"
      },
      {
        name: 'Teh Sosro Celup Black Tea 15',
        spesification: `Teh Hitam`,
        price:3000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/7/24/19299cf7-50ff-46bc-b561-ab5d148fa8a1.png",
        address:"gresik"
      },
      {
        name: 'Minyak Goreng 2 Liter - Sovia',
        spesification: `Minyak Goreng Refill 2 Liter`,
        price:29000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/7/13/cdfc22ef-edac-4a5b-83f7-a2c30c2076b9.jpg",
        address:"surabaya"
      },
      {
        name: 'Sedaap Mie Instan Korean Spicy Chicken 88 gr',
        spesification: `Sedaap Instant Noodle Korean Spicy Chicken`,
        price:3000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/6/7/8cf6bc16-e8cc-47fe-8810-42e0f1bc412e.png",
        address:"bandung"
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('items', null, {});
  }
};
