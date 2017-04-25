var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.get('/', userController.getUsers)
router.get('/:id', userController.getUser)
router.post('/', userController.insertUser)
router.delete('/:id', userController.deleteUser)
router.put('/:id', userController.updateUser)

module.exports = router;
