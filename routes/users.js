var express = require('express');
var api = require('../controllers/userController')
var router = express.Router();

/* GET users listing. */
router.get('/', api.getAllUser)
router.get('/:id', api.getUser)
router.post('/', api.createUser)
router.delete('/:id', api.deleteUser)
router.put('/:id', api.updateUser)

module.exports = router;
