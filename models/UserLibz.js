const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserLibz extends Model {}

UserLibz.init(
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
    lib_creater: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_cred_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userlibz',
    }
);
  
  module.exports = UserLibz;