var db = require('../models');
module.exports = {
  getall: (req, res, next) => {
    db.User.findAll().then(ArrResult => {
      res.send(ArrResult)
    })
  }
}
