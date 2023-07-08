const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      email: {
         type: DataTypes.STRING,
         isEmail: true,
         allowNull: false
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
      },
   }, { timestamps: false });
};