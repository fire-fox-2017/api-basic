const db = require('../models');
let getAllUser = function (req, res){
  db.User.findAll({order: '"id" ASC'}).then((users)=>{
    res.send(users)
  })
}
let getUser = function(req, res){
  db.User.findOne({where: {id : req.params.id}})
  .then((user)=>{
    res.send(user)
  })
}
let createUser = function(req,res){
  let n = req.body.name
  let a = req.body.age
  db.User.create({
    name: n,
    age: a
  })
  .then((newuser)=>{
    res.send(newuser)
  })
}
let deleteUser= function(req,res){
  db.User.destroy({where: {id: req.params.id}}).then(()=>{
    db.User.findAll({order: '"id" ASC'}).then((users)=>{
      res.send(users)
    })
  })
}
let updateUser= function(req,res){
  let n = req.body.name
  let a = req.body.age
  db.User.findOne({where:{id: req.params.id}})
  .then((user)=>{
    user.updateAttributes({
      name: n,
      age: a
    })
    .then((user)=>{
      res.send(user)
    })
  })
}
module.exports={ 
  getAllUser, getUser, createUser, deleteUser, updateUser
}