var db = require('../models');
const methods = {}


methods.getAllUser = function(req,res){
  db.User.findAll()
  .then((users)=>{
    res.send(users)
  })
}// GET ALL USERS


methods.getSingleUser = function(req,res){
  db.User.findById(req.params.id)
  .then((user)=>{
    res.send(user)
  })
}// FIND SINGLE USER

methods.createUser = function(req,res){
  db.User.create({
    username:req.body.username,
    password:req.body.password
  })
  .then((user)=>{
    res.send(user)
  })
}// CREATE USER

methods.deleteUser = function(req,res){
  db.User.destroy({where : { id : req.params.id }} )
  .then(()=>{
    res.send('berhasil hapus')
  })
}// Delete USER

methods.updateUser = function(req,res){
  db.User.update({username: req.body.username, password:req.body.password}, {where : { id : req.params.id }} )
  .then(()=>{
    res.send('berhasil update')
  })
}// Delete USER

module.exports = methods