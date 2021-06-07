const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');
const User = require('../models/user');

exports.signup = (req, res, next) => {
	bcrypt.hash(req.body.password, 10) //Promise function async hash the passwords with 10x possibilities algorithme
	.then(hash => {
		User.create({ name: req.body.name, email: req.body.email, password: hash }).then((user) => {
			res.status(200).json({
				userId: user.id,
				token: jwt.sign( //use a sign function of jsonwebtoken to generate a token
				  { userId: user.id }, //this token has an id as a payload (a data generate from token)
				  process.env.JWT_SECRET, //temporary keyword to generate the token in .env
				  { expiresIn: '24h' }
				)
			});
		})
		.catch(error => res.status(400).json("Cette adresse e-mail est déjà utilisée"));
	})
	.catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
	console.log(req.body.email)
	User.findOne({ where: { email: req.body.email }}) //find the same email exist in database
	.then(user => {
		if (!user) { //if not the same user
			return res.status(401).json({ error: 'User is not found!' }); //401 access unathorized
		}
		bcrypt.compare(req.body.password, user.password) //if user exist then compare by bcrypt method compare
		.then(valid => {
			if (!valid) { //if not valid
				return res.status(401).json({ error: 'Password is invalid!' }); //send error
			}
			res.status(200).json({
				userId: user.id,
				token: jwt.sign( //use a sign function of jsonwebtoken to generate a token
				  { userId: user.id }, //this token has an id as a payload (a data generate from token)
				  process.env.JWT_SECRET, //temporary keyword to generate the token in .env
				  { expiresIn: '24h' }
				)
			});
		})
		.catch(error => res.status(500).json({ error })); //500 error server
	})
	.catch(error => res.status(400).json("Utilisateur non trouvé!"));
};

exports.profil = (req, res, next) => {
	console.log(req)
	User.findOne({ where: { id: req.body.userId }}) //find the same email exist in database
	.then(user => {
		res.status(200).json(user);
	}).catch(error => res.status(500).json({ error })); //500 error server
};

exports.delete = (req, res, next) => { 
	User.destroy({ where: { id: req.body.userId }})
  	.then(() => {
		res.status(200).json();
	})
};