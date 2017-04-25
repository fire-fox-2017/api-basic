'use strict';

const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', (req,res,next) => {
  res.send('Hello World');
})

router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getById);
router.put('/users/:id', userController.updateById);
router.delete('/users/:id', userController.deleteById);

module.exports = router;
