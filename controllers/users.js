const db = require('../models');
const methods = {};

methods.getAll = (req, res) => {
  db.User.findAll()
  .then(users => {
    res.send(users);
  })
  .catch(err => {
    res.send(err);
  })
}

methods.findId = (req, res) => {
  db.User.findById(req.params.id)
  .then(user => {
    res.send(user);
  })
  .catch(err => {
    res.send(err);
  })
}

methods.create = (req, res) => {
  db.User.create({
    fullname: req.body.fullname,
    email: req.body.email
  })
  .then(() => {
    res.send(`success create new user`);
  })
}

methods.delete = (req, res) => {
  db.User.destroy({where: {id: req.params.id}})
  .then(() => {
    res.send('success delete user with id ' + req.params.id)
  })
  .catch(err => {
    res.send(err);
  })
}

methods.update = (req, res) => {
  // res.send(req.body)
  db.User.update({fullname: req.body.fullname, email: req.body.email}, {where: {id: req.params.id}})
  .then(user => {
    res.send(`success update user with id ${req.params.id}`);
  })
  .catch(err => {
    res.send(err);
  })
}


module.exports = methods;