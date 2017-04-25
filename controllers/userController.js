const db = require('../models');
const methods = {};

methods.getUsers = (req,res,next) => {
    db.User.findAll()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.json(err)
    })
}

methods.getUser = (req,res,next) => {
    var UserId = req.params.id;
    db.User.findById(UserId)
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.json(err)
    })
}

methods.insertUser = (req,res,next) => {
    var name = req.body.name;
    var phone = req.body.phone;

    db.User.create({
        name: name,
        phone: phone
    })
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.json(err)
    })
}

methods.deleteUser = (req,res,next) => {
    var userId = req.params.id;

    db.User.destroy({
        where: {
            id: userId
        }
    })
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.json(err)
    })
}

methods.updateUser = (req,res,next) => {
    var userId = req.params.id;
    var name = req.body.name;
    var phone = req.body.phone;

    db.User.update({
        name:name,
        phone:phone
    },{
        where:{
            id:userId
        }
    })
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports = methods
