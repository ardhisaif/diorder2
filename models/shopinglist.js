'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShopingList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {  
      // ShopingList.belongsTo(models.item)
      ShopingList.belongsTo(models.customer)
      ShopingList.belongsTo(models.item)
    }
  };
  ShopingList.init({
    id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
    itemId: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ShopingList',
  });
  return ShopingList;
};