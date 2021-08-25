'use strict';
const hashPassoword = require("../helpers/encryption").hashPassoword
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      customer.hasMany(models.ShopingList)
    }
  };
  
  customer.init({
    name: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      validate:{
        minPassword(value) {
          if (value.length < 6 ) {
            throw new Error('password minimal 6 karakter');
          }
        },
        maxPassword(value) {
          if (value.length > 13 ) {
            throw new Error('password maximal 13 karakter');
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail: true
      }
    }
  },{
    hooks:{
      beforeCreate: (customer,options) => {
        customer.password = hashPassoword(customer.password)
      }
    },
    sequelize,
    modelName: 'customer'
  });
  return customer;
};