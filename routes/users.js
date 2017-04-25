var express = require('express');
var router = express.Router();
var controllers = require('../controllers/usersControllers');

router.get('/', controllers.getall);

module.exports = router;
