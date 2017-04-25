const db = require('../models')
const methods = {}
// router.get('/', userController.getAll );
methods.getAll = function(req, res, next) {
  db.Contact.findAll()
    .then( user => {
      res.json(user)
    })
    .catch( error => {
      res.json({error})
    })
}// getAll

// router.get('/:id', userController.getById );
methods.getById = function(req, res, next) {
  db.Contact.findById(req.params.id)
    .then( contact => {
      res.json(contact)
    })
    .catch( error => {
      res.json({error})
    })
}
// router.post('/', userController.createUser );
methods.createUser = function(req, res, next) {
  db.Contact.create(
    {name: req.body.name, phone: parseInt(req.body.phone)}
  ) .then(data => {
      res.send("data berhasil ditambahkan !")
    })
    .catch( error => {
      res.json({error})
    })
}
// router.delete('/:id', userController.deleteById );
methods.deleteById = function(req, res, next) {
  db.Contact.destroy({
    where: {id:req.params.id}
  })
    .then( contact => {
      res.send("berhasil dihapus")
    })
    .catch( error => {
      res.json({error})
    })
}
// router.put('/:id', userController.updateById );
methods.updateById = function(req, res, next) {
  db.Contact.update({
    name: req.body.name,
    phone: parseInt(req.body.phone)
  },{
    where: {id:req.params.id}
  })
    .then( contact => {
      res.send('berhasil di update')
    })
    .catch( error => {
      res.json({error})
    })
}
module.exports = methods
