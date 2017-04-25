var db = require('../models');
module.exports = {
  getall: (req, res, next) => {
    db.User.findAll().then(ArrResult => {
      res.send(ArrResult);
    })
  },
  getone: (req, res, next) => {
    let id = req.params.id;
    db.User.findById(id).then(Result => {
      res.send(Result);
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
      res.send(Result);
    }).catch(err => {
      res.send(err);
    })
  }
}
