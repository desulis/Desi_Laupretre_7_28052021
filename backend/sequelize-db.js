const { Sequelize } = require('sequelize'); //parameter of sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, { //configure connection to access MySQL
	host: process.env.DB_HOST,
	dialect: 'mysql',
	database: 'groupomania'
});

module.exports = sequelize;