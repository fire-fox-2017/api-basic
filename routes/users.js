var express = require('express');
var router = express.Router();
var models = require('../models');
var controller = require('../controllers/usersController');

/* GET users listing. */
router.get('/api/users', controller.getAllData);
router.get('/api/users/:id', controller.getDataById);
router.post('/api/users', controller.insert);
router.delete('/api/users/:id', controller.delete);
router.put('/api/users/:id',controller.updates);
router.patch('/api/users/:id',controller.updates);

module.exports = router;
