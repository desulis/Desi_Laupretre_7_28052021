const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); //import the midleware of authentification
const multer = require('../middleware/multer-config');
//import the controllers.stuff that now has all function router
const postCtrl = require('../controllers/post'); 

router.get('/', postCtrl.getAllPost); //request must passed the authentification middleware before controllers
router.post('/', multer, postCtrl.createPost);
router.get('/:id', auth, postCtrl.getOnePost);
router.put('/:id', auth, multer, postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);

module.exports = router;

//now in this file is more cleaner because all the logic of the function imigrate to controllers folder