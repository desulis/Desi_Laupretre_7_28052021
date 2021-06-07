const { DataTypes, Model } = require("sequelize");
const sequelize = require('../sequelize-db');
const Post = require('../models/post');

class User extends Model {}
User.init({
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: DataTypes.STRING,
	email: DataTypes.STRING,
	password: DataTypes.STRING
}, { sequelize, modelName: 'user' });



module.exports = User;
