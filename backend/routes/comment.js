const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); //import the midleware of authentification
const multer = require('../middleware/multer-config');
//import the controllers.stuff that now has all function router
const commentCtrl = require('../controllers/comment'); 

router.post('/', auth, commentCtrl.createComment);


module.exports = router;