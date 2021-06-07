const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize-db');

class Post extends Model {}
Post.init({
	id:{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	article: DataTypes.STRING,
	image: DataTypes.STRING,
	userId: DataTypes.INTEGER
}, { sequelize, modelName: 'post' });

module.exports = Post;