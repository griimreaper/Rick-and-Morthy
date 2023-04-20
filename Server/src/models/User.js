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
         allowNull: true
      },
      password: {
         type: DataTypes.STRING,
         allowNull: true,
         validate: {
            is: /^[a-z]+$/i,
            len: [6,10]
         }
      },
   }, { timestamps: false });
};