var express = require('express');
var router = express.Router();
var controllers = require('../controllers/usersControllers');

router.get('/', controllers.getall);
router.get('/:id', controllers.getone);
router.post('/', controllers.create);

module.exports = router;
