const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize-db');

// same as model config from mySQL bench
class Comment extends Model {}
Comment.init({
	id:{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	comment: DataTypes.STRING,
	userId: DataTypes.INTEGER,
	postId: DataTypes.INTEGER
}, { sequelize, modelName: 'comment' });

module.exports = Comment;