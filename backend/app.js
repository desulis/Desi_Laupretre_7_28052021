const express = require('express'); //import express

const helmet = require('helmet');

const dotenv = require('dotenv').config();

const cors = require('cors');

// const bodyParser = require('body-parser'); //import body-parser

const mysql = require('mysql'); //import mongoose

// const userRoutes = require('./routes/user'); //import router for user route

// const postRoutes = require('./routes/post'); 

// const commentRoutes = require('./routes/comment');

var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
});
connection.connect();

connection.query('SELECT * from groupomania.user', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0]);
});

connection.end();


const app = express(); 

const path = require('path'); //path to server

app.use(cors()); //Cross-Origin Resource Sharing is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options

app.use(helmet()); //security configuration to safeguard application or API from usual security risks like XSS, Content Security Policy, and others

app.use(express.json());
// app.use(bodyParser.json()); //define json as a middleware global function for app

// app.use('/api/user', userRoutes); //save as a unique route to all request on /api/stuff
// app.use('/api/post', postRoutes); //save for the user authentification
// app.use('/api/comment', commentRoutes);
app.use('/images', express.static(path.join(__dirname, 'images'))); //indicate to express to manage 'images' in static subrepo __dirname

module.exports = app;