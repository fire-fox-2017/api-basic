const models = require('../models');

var methode = {}

methode.getAllData = function(req, res, next) {
  models.User.findAll({})
  .then((query)=>{
    res.send(query)
  })
} ;

methode.getDataById = function(req, res, next) {
  models.User.findOne({
    where : {
      id : req.params.id
    }
  })
  .then((query)=>{
    res.send(query)
  })
} ;

methode.insert = (req, res, next)=>{
  models.User.create({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    dateofbirth : req.body.dateofbirth,
    gender : req.body.gender
  })
  .then((query)=>{
    res.send(query)
  })
};

methode.delete = (req, res, next)=>{
  models.User.destroy({
    where :{
      id : req.params.id
    }
  })
  .then(()=>{
    res.send("Data Deleted with id : "+req.params.id)
  })
};

methode.updates = (req, res, next)=>{
  models.User.update({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    dateofbirth : req.body.dateofbirth,
    gender : req.body.gender,
    updatedAt : new Date()
  },{
    where : {
      id : req.params.id
    }
  })
  .then((query)=>{
    res.send(query)
  })
};

module.exports = methode
