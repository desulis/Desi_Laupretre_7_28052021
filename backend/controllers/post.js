const fs = require('fs'); //function file system that allow to modify the file system like delete
const Post = require('../models/post');

//export all function that was in route.js

exports.getAllPost = (req, res, next) => {
	Post.findAll().then((posts) => {
		res.status(200).json(posts);
	})
};

exports.createPost = (req, res, next) => { 
	console.log(req.body)
	req.body.user = 1
  	Post.create(req.body).then(() => {
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
