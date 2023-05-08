const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Madlibz extends Model {}

Madlibz.init(
    {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.BLOB,
        allowNull: false,
    },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'madlibz',
    }

  );
  
  module.exports = Madlibz;