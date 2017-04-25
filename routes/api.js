const router = require('express').Router();
const userController = require('../controllers/users')

router.get('/', function(req, res, next) {
    res.send('Hello World');
})
// routes user
router.get('/users', userController.getAllUsers)
router.get('/users/:id', userController.getById)
router.post('/users', userController.createUser)
router.put('/users/:id', userController.updateById)
router.delete('/users/:id', userController.deleteById)

module.exports = router;
