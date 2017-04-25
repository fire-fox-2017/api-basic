var db = require('../models');
module.exports = {
  getall: (req, res, next) => {
    db.User.findAll().then(ArrResult => {
      res.json(ArrResult);
    })
  },
  getone: (req, res, next) => {
    let id = req.params.id;
    db.User.findById(id).then(Result => {
      res.json(Result);
    })
  },
  create: (req, res, next) => {
    let name = req.body.name;
    let age = req.body.age;
    let email = req.body.email;
    console.log(`name ${name} age ${age} email ${email}`);
    db.User.create({
      name: name,
      age: age,
      email: email
    }).then(Result => {
      res.json(Result);
    }).catch(err => {
      res.send(err);
    })
  },
  delete: (req, res, next) => {
    let id = req.params.id;
    db.User.destroy({
      where: {
        id: id
      }
    }).then(Result => {
      res.json(Result);
    }).catch(err => {
      res.json(err);
    })
  },
  update: (req, res, next) => {
    let id = req.params.id;
    let name = req.body.name;
    let age = req.body.age;
    let email = req.body.email;
    db.User.update({
      name: name,
      age: age,
      email: email
    }, {
      where: {
        id: id
      }
    }).then(Result => {
      res.json(Result);
    }).catch(err => {
      res.json(err);
    })
  }
}
