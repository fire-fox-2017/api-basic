const db = require('../models');

let controller = {}

controller.findall = function(req, res, next) {
    db.User.findAll()
      .then((users)=>{
        res.send(users)
      })
}

controller.single = function(req, res, next) {
    db.User.findById(req.params.id)
      .then((users)=>{
        res.send(users)
      })
}

controller.create = function(req, res, next) {
    db.User.create({
      name : req.body.name,
      email : req.body.email
    })
      .then((users)=>{
        res.send(users)
      })
      .catch(err =>{
        res.send(err)
      })
}

controller.delete = function(req, res, next) {
    db.User.destroy({
      where : {id : req.params.id}
    })
      .then((users)=>{
        res.sendStatus(users)
      })
      .catch((err)=>{
        res.send(err)
      })
}

controller.update = function(req, res, next) {
    db.User.update({
      name : req.body.name,
      email : req.body.email
    },{where : {id : req.params.id}})
      .then((users)=>{
        res.send(users)
      })
}


module.exports = controller;