var db = require('../models');
var method = {}


method.getAllUser = function(req, res) {
    db.User.findAll()
        .then(data => {
            res.send(data)
        })
}

method.getOneUser = function(req, res) {
    db.User.findById(req.params.id)
        .then(data => {
            res.send(data)
        })
}

method.createUser = (req, res) => {
    db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            bio: req.body.bio
        })
        .then(() => {
            res.send('INSERT SUCCESS!!')
        })
}

method.deleteUser = (req, res) => {
    db.User.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.send('DELETE SUCCESS!!')
        })
}

method.updateUser = (req, res) => {
  console.log(req);
    db.User.update({
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      bio : req.body.bio
    },{where: {id: req.params.id} })
    .then(()=>{
      res.send('UPDATE SUCCESS')

    })
}



module.exports = method;
