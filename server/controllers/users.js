var models = require('../models');
// var db = require('../db/index');
var bluebird = require('bluebird');
const { Sequelize } = require('sequelize');

const { User } = require('../db/index');

module.exports = {

  get: function (req, res, next) {
    //will be a problem, need to be async. await the data; do proper err handling;
    User.findAll()
      .then(function(results) {
        res.send(results);
      })
      .catch(function(err) {
        console.log(err);
      });
    // models.users.getAll((users) => {
    //   res.send(users);
    // });
  },
  post: function (req, res, next) {
    var username = {
      username: req.body.username
    };
    console.log('user', User);
    User.create(username)
      .then (function(results) {
        res.sendStatus(201);
      })
      .catch(function(err) {
        console.log(err);
      });
    // models.users.create(req.body.username, (success) => {
    //   res.send(success);
    // });
  },
};
