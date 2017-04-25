const express = require('express');
const router = express.Router();
const User = require('../controllers/users');

router.get('/', User.getAll);
router.get('/:id', User.findId);
router.post('/', User.create);
router.delete('/:id', User.delete);
router.put('/:id', User.update);

module.exports = router;