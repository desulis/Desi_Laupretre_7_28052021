const Comment = require('../models/comment');

exports.createComment = (req, res, next) => { 
  	Comment.create(req.body).then(() => {
		res.status(200).json();
	})
};

exports.getAllComment = (req, res, next) => { 
  
};

exports.getOneComment = (req, res, next) => {
  
};

exports.modifyComment = (req, res, next) => {
  
};

exports.deleteComment = (req, res, next) => {
  
};

exports.getLatestComments = (req, res, next) => {
  
};
