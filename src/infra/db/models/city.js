'use strict';
const { Model, DataTypes } = require('sequelize');

const CityModel = (sequelize) => {
  class City extends Model {
    
    static associate(models) {
      // define association here
      City.hasMany(models.User, {
        foreignKey: 'city_id',
        as: 'users'
      });
    }

  }

  City.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'City',
    tableName: 'cities',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
 
  return City;
};

module.exports = CityModel;