const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); //import the midleware of authentification
const multer = require('../middleware/multer-config');
//import the controllers.stuff that now has all function router
const commentCtrl = require('../controllers/comment'); 

router.get('/', auth, commentCtrl.getAllComment); //request must passed the authentification middleware before controllers
router.post('/', auth, commentCtrl.createComment);
router.get('/:id', auth, commentCtrl.getOneComment);
router.put('/:id', auth, multer, commentCtrl.modifyComment);
router.delete('/:id', auth, commentCtrl.deleteComment);

module.exports = router;