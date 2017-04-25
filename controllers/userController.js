var express = require('express');
var router = express.Router();
var models = require('../models');
var methods = {};

methods.getAllUsers = (req,res,next) => {
  models.User.findAll()
  .then(data => {
    res.json(data)
  })
}

methods.createUser = (req,res,next) => {
  models.User.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  .then(data => {
    res.json(data)
  })
}

methods.getById = (req,res,next) => {
  models.User.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(data => {
    res.json(data)
  })
}

methods.updateById = (req,res,next) => {
  models.User.update({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    },{
    where : {
      id : req.params.id
    }
  })
  .then(data => {
    res.json(data)
  })
}

methods.deleteById = (req,res,next) => {
  models.User.destroy({
    where : {
      id : req.params.id
    }
  })
  .then(data => {
    res.json(data);
  })
}


module.exports = methods
