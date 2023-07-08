
const { Sequelize } = require('sequelize');
const process = require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DP_URL, DP_PORT } = process.parsed;
const FavoriteModel = require("./models/Favorite")
const UserModel = require("./models/User")

const sequelize = new Sequelize(
   `${DP_URL}`,
   {
      logging: false,
      native: false,
      dialect:'postgres',
      dialectModule: require('pg')
   }
);

FavoriteModel(sequelize)
UserModel(sequelize)

const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: "UserFavorite", timestamps: false })
Favorite.belongsToMany(User, { through: "UserFavorite", timestamps: false })

module.exports = {
   User,
   Favorite,
   DP_PORT,
   conn: sequelize,
};
