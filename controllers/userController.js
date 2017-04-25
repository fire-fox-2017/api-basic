var db = require('../models')
var methods = {}

methods.insertOne = (req, res, next) => {
    db.User.create(req.body)
        .then(record => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu createOne'
            })
        })
}

methods.getAll = (req, res, next) => {
    db.User.findAll()
        .then(records => {
            res.json(records)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getAll'
            })
        })
}

methods.getById = (req, res, next) => {
    db.User.findById(req.params.id)
        .then(record => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getById'
            })
        })
}

methods.getById = (req, res, next) => {
    db.User.findById(req.params.id)
        .then(record => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getById'
            })
        })
}

methods.updateById = (req, res, next) => {
    db.User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then((record) => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu updateById'
            })
        })
} //updateById

methods.deleteById = (req, res, next) => {
    db.User.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((record) => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu deleteById'
            })
        })
}

module.exports = methods