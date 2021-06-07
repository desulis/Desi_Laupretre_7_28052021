const Comment = require('../models/comment'); //service api for comment that use params from route and model get from models

exports.createComment = (req, res, next) => { 
  	Comment.create(req.body).then(() => {
		res.status(200).json();
	})
};
