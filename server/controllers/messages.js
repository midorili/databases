var models = require("../models");
var bluebird = require('bluebird');

const { Sequelize } = require('sequelize');

const { Message } = require(`../db/index`);

module.exports = {
  get: function (req, res, next) {
    //will be a problem, need to be async. await the data; do proper err handling;
    Message.findAll()
      .then(function(results) {
        res.send(results);
      })
      .catch(function(err) {
        console.log(err);
      });
    // models.messages.getAll((messages) => {
    //   res.send(messages);
    // });
  },
  post: function (req, res, next) {
    // var username = req.body.username;
    // var message = req.body.message;
    // var roomname = req.body.roomname;

    // var params = [username, message,roomname];
    var params = {
      username: req.body.username,
      message: req.body.message,
      roomname: req.body.roomname
    };
    Message.create(params)
      .then(function(results) {
        res.sendStatus(201);
      })
      .catch(function(err) {
        console.log(err);
      });

    // models.messages.create(params, (success) => {
    //   res.send(success);
    // });
  },
};
