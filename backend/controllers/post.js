const fs = require('fs'); //function file system that allow to modify the file system like delete
const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');

//export all function that was in route.js

exports.getAllPost = (req, res, next) => {
	Post.findAll({
		include: [
			{ model: User, attributes: ['name'] },
			{ model: Comment, include: {
				model: User, attributes: ['name']
			}},
		],
		order: [ ['createdAt', 'DESC'] ],
	}).then((posts) => {
		res.status(200).json(posts);
	})
};

exports.createPost = (req, res, next) => { 
	console.log(req.file)
	const post = {
		userId: req.body.userId,
		article: req.body.article,
	}
	if (req.file) {
		post.image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}` //protocol : get a segment from http, add // and a server host, folder image and filename
	}
  	Post.create(post).then(() => {
		res.status(200).json();
	})
};

exports.getOnePost = (req, res, next) => {
  
};

exports.modifyPost = (req, res, next) => {
  
};

exports.deletePost = (req, res, next) => {
  
};

exports.getLatestPosts = (req, res, next) => {
  
};
