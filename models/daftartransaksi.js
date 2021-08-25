'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class daftarTransaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      daftarTransaksi.belongsTo(models.customer)
      daftarTransaksi.belongsTo(models.item)
    }
  };
  daftarTransaksi.init({
    itemId: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'daftarTransaksi',
  });
  return daftarTransaksi;
};