const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', userController.getAll );
router.get('/:id', userController.getById );
router.post('/', userController.createUser );
router.delete('/:id', userController.deleteById );
router.put('/:id', userController.updateById );

module.exports = router;
