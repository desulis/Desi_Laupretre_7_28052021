const fs = require('fs'); //function file system that allow to modify the file system like delete


//export all function that was in route.js
exports.createPost = (req, res, next) => { 
  const postObject = JSON.parse(req.body.post); //parse Json to get object utilisable
  
};

exports.getOnePost = (req, res, next) => {
  
};

exports.modifyPost = (req, res, next) => {
  
};

exports.deletePost = (req, res, next) => {
  
};

exports.getLatestPosts = (req, res, next) => {
  
};
